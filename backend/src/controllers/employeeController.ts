import { Request, Response } from 'express';
import Employee, { IEmployee } from '../models/Employee';
import { createError } from '../utils/error';

// Create new employee
export const createEmployee = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const employee = new Employee({
      ...req.body,
      businessId: req.user.businessId,
    });
    await employee.save();
    res.status(201).json({ success: true, data: employee });
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
};

// Get all employees for a business
export const getEmployees = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const employees = await Employee.find({ businessId: req.user.businessId });
    res.status(200).json({ success: true, data: employees });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Get employee by ID
export const getEmployeeById = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const employee = await Employee.findOne({
      _id: req.params.id,
      businessId: req.user.businessId,
    });

    if (!employee) {
      return res.status(404).json(createError('Employee not found'));
    }

    res.status(200).json({ success: true, data: employee });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Update employee
export const updateEmployee = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const employee = await Employee.findOneAndUpdate(
      { _id: req.params.id, businessId: req.user.businessId },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!employee) {
      return res.status(404).json(createError('Employee not found'));
    }

    res.status(200).json({ success: true, data: employee });
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
};

// Delete employee
export const deleteEmployee = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const employee = await Employee.findOneAndDelete({
      _id: req.params.id,
      businessId: req.user.businessId,
    });

    if (!employee) {
      return res.status(404).json(createError('Employee not found'));
    }

    res.status(200).json({ success: true, message: 'Employee deleted successfully' });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Update employee working hours
export const updateWorkingHours = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const { workingHours } = req.body;
    const employee = await Employee.findOneAndUpdate(
      { _id: req.params.id, businessId: req.user.businessId },
      { $set: { workingHours } },
      { new: true, runValidators: true }
    );

    if (!employee) {
      return res.status(404).json(createError('Employee not found'));
    }

    res.status(200).json({ success: true, data: employee });
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
};

// Update employee services
export const updateServices = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const { services } = req.body;
    const employee = await Employee.findOneAndUpdate(
      { _id: req.params.id, businessId: req.user.businessId },
      { $set: { services } },
      { new: true, runValidators: true }
    );

    if (!employee) {
      return res.status(404).json(createError('Employee not found'));
    }

    res.status(200).json({ success: true, data: employee });
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
};

// Update employee status
export const updateStatus = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json(createError('User not authenticated'));
  }
  try {
    const { status } = req.body;
    const employee = await Employee.findOneAndUpdate(
      { _id: req.params.id, businessId: req.user.businessId },
      { $set: { status } },
      { new: true, runValidators: true }
    );

    if (!employee) {
      return res.status(404).json(createError('Employee not found'));
    }

    res.status(200).json({ success: true, data: employee });
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
}; 