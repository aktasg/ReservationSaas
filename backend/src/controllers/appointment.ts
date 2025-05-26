import { Request, Response } from 'express';
import Appointment from '../models/Appointment';

// Tüm randevuları getir
export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await Appointment.find({ businessId: (req as any).user._id })
      .populate('employeeId', 'name');
    res.json(appointments);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Yeni randevu oluştur
export const createAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await Appointment.create({
      ...req.body,
      businessId: (req as any).user._id,
    });
    res.status(201).json(appointment);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Randevu güncelle
export const updateAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await Appointment.findOneAndUpdate(
      { _id: req.params.id, businessId: (req as any).user._id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: 'Randevu bulunamadı' });
    }

    res.json(appointment);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Randevu sil
export const deleteAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await Appointment.findOneAndDelete({
      _id: req.params.id,
      businessId: (req as any).user._id,
    });

    if (!appointment) {
      return res.status(404).json({ message: 'Randevu bulunamadı' });
    }

    res.json({ message: 'Randevu başarıyla silindi' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}; 