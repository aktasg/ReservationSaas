import { Request, Response } from 'express';
import Service, { IService } from '../models/Service';
import { createError } from '../utils/error';

// Create new service
export const createService = async (req: Request, res: Response) => {
  try {
    const service = new Service({
      ...req.body,
      businessId: req.user.businessId,
    });
    await service.save();
    res.status(201).json({ success: true, data: service });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json(createError('Service name already exists for this business'));
    }
    res.status(400).json(createError(error.message));
  }
};

// Get all services for a business
export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await Service.find({ businessId: req.user.businessId });
    res.status(200).json({ success: true, data: services });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Get service by ID
export const getServiceById = async (req: Request, res: Response) => {
  try {
    const service = await Service.findOne({
      _id: req.params.id,
      businessId: req.user.businessId,
    });

    if (!service) {
      return res.status(404).json(createError('Service not found'));
    }

    res.status(200).json({ success: true, data: service });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Update service
export const updateService = async (req: Request, res: Response) => {
  try {
    const service = await Service.findOneAndUpdate(
      { _id: req.params.id, businessId: req.user.businessId },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json(createError('Service not found'));
    }

    res.status(200).json({ success: true, data: service });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json(createError('Service name already exists for this business'));
    }
    res.status(400).json(createError(error.message));
  }
};

// Delete service
export const deleteService = async (req: Request, res: Response) => {
  try {
    const service = await Service.findOneAndDelete({
      _id: req.params.id,
      businessId: req.user.businessId,
    });

    if (!service) {
      return res.status(404).json(createError('Service not found'));
    }

    res.status(200).json({ success: true, message: 'Service deleted successfully' });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Update service status
export const updateStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const service = await Service.findOneAndUpdate(
      { _id: req.params.id, businessId: req.user.businessId },
      { $set: { status } },
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json(createError('Service not found'));
    }

    res.status(200).json({ success: true, data: service });
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
};

// Get active services
export const getActiveServices = async (req: Request, res: Response) => {
  try {
    const services = await Service.find({
      businessId: req.user.businessId,
      status: 'active',
    });
    res.status(200).json({ success: true, data: services });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
}; 