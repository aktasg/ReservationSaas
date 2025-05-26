import { Request, Response } from 'express';
import Employee from '../models/Employee';

// Tüm çalışanları getir
export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await Employee.find({ businessId: (req as any).user._id });
    res.json(employees);
  } catch (error: any) {
    console.error('Get all employees error:', error);
    res.status(500).json({ message: error.message });
  }
};

// Yeni çalışan ekle
export const createEmployee = async (req: Request, res: Response) => {
  try {
    console.log('Create employee request body:', req.body);
    console.log('User ID:', (req as any).user._id);
    
    const employee = await Employee.create({
      ...req.body,
      businessId: (req as any).user._id,
    });
    res.status(201).json(employee);
  } catch (error: any) {
    console.error('Create employee error:', error);
    res.status(400).json({ 
      message: error.message,
      details: error.errors // Mongoose validation errors
    });
  }
};

// Çalışan güncelle
export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findOneAndUpdate(
      { _id: req.params.id, businessId: (req as any).user._id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!employee) {
      return res.status(404).json({ message: 'Çalışan bulunamadı' });
    }

    res.json(employee);
  } catch (error: any) {
    console.error('Update employee error:', error);
    res.status(400).json({ message: error.message });
  }
};

// Çalışan sil
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findOneAndDelete({
      _id: req.params.id,
      businessId: (req as any).user._id,
    });

    if (!employee) {
      return res.status(404).json({ message: 'Çalışan bulunamadı' });
    }

    res.json({ message: 'Çalışan başarıyla silindi' });
  } catch (error: any) {
    console.error('Delete employee error:', error);
    res.status(500).json({ message: error.message });
  }
}; 