import { Request, Response } from 'express';
import Appointment, { IAppointment } from '../models/Appointment';
import { createError } from '../utils/error';

// Create new appointment
export const createAppointment = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const appointment = new Appointment({
      ...req.body,
      businessId: req.user.businessId,
    });
    await appointment.save();
    res.status(201).json({ success: true, data: appointment });
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
};

// Get all appointments for a business
export const getAppointments = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const { startDate, endDate, employeeId, status } = req.query;
    const query: any = { businessId: req.user.businessId };

    if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string),
      };
    }

    if (employeeId) {
      query.employeeId = employeeId;
    }

    if (status) {
      query.status = status;
    }

    const appointments = await Appointment.find(query)
      .populate('employeeId', 'firstName lastName')
      .populate('serviceId', 'name duration price')
      .sort({ date: 1 });

    res.status(200).json({ success: true, data: appointments });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Get appointment by ID
export const getAppointmentById = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const appointment = await Appointment.findOne({
      _id: req.params.id,
      businessId: req.user.businessId,
    })
      .populate('employeeId', 'firstName lastName')
      .populate('serviceId', 'name duration price');

    if (!appointment) {
      return res.status(404).json(createError('Appointment not found'));
    }

    res.status(200).json({ success: true, data: appointment });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Update appointment
export const updateAppointment = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const appointment = await Appointment.findOneAndUpdate(
      { _id: req.params.id, businessId: req.user.businessId },
      { $set: req.body },
      { new: true, runValidators: true }
    )
      .populate('employeeId', 'firstName lastName')
      .populate('serviceId', 'name duration price');

    if (!appointment) {
      return res.status(404).json(createError('Appointment not found'));
    }

    res.status(200).json({ success: true, data: appointment });
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
};

// Delete appointment
export const deleteAppointment = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const appointment = await Appointment.findOneAndDelete({
      _id: req.params.id,
      businessId: req.user.businessId,
    });

    if (!appointment) {
      return res.status(404).json(createError('Appointment not found'));
    }

    res.status(200).json({ success: true, message: 'Appointment deleted successfully' });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Update appointment status
export const updateStatus = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const { status } = req.body;
    const appointment = await Appointment.findOneAndUpdate(
      { _id: req.params.id, businessId: req.user.businessId },
      { $set: { status } },
      { new: true, runValidators: true }
    )
      .populate('employeeId', 'firstName lastName')
      .populate('serviceId', 'name duration price');

    if (!appointment) {
      return res.status(404).json(createError('Appointment not found'));
    }

    res.status(200).json({ success: true, data: appointment });
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
};

// Get appointments by date range
export const getAppointmentsByDateRange = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const { startDate, endDate } = req.query;
    const appointments = await Appointment.find({
      businessId: req.user.businessId,
      date: {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string),
      },
    })
      .populate('employeeId', 'firstName lastName')
      .populate('serviceId', 'name duration price')
      .sort({ date: 1 });

    res.status(200).json({ success: true, data: appointments });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Get appointments by employee
export const getAppointmentsByEmployee = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const { employeeId, startDate, endDate } = req.query;
    const query: any = {
      businessId: req.user.businessId,
      employeeId,
    };

    if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string),
      };
    }

    const appointments = await Appointment.find(query)
      .populate('employeeId', 'firstName lastName')
      .populate('serviceId', 'name duration price')
      .sort({ date: 1 });

    res.status(200).json({ success: true, data: appointments });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
}; 