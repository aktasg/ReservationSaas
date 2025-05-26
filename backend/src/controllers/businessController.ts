import { Request, Response } from 'express';
import Business, { IBusiness } from '../models/Business';
import { createError } from '../utils/error';

// Create a new business
export const createBusiness = async (req: Request, res: Response) => {
  try {
    const business = new Business(req.body);
    await business.save();
    res.status(201).json(business);
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json(createError('Email already exists'));
    }
    res.status(400).json(createError(error.message));
  }
};

// Get all businesses (admin only)
export const getAllBusinesses = async (req: Request, res: Response) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Get business by ID
export const getBusinessById = async (req: Request, res: Response) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json(createError('Business not found'));
    }
    res.status(200).json(business);
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Update business
export const updateBusiness = async (req: Request, res: Response) => {
  try {
    const business = await Business.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!business) {
      return res.status(404).json(createError('Business not found'));
    }
    res.status(200).json(business);
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json(createError('Email already exists'));
    }
    res.status(400).json(createError(error.message));
  }
};

// Delete business
export const deleteBusiness = async (req: Request, res: Response) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id);
    if (!business) {
      return res.status(404).json(createError('Business not found'));
    }
    res.status(200).json({ message: 'Business deleted successfully' });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Update business settings
export const updateBusinessSettings = async (req: Request, res: Response) => {
  try {
    const business = await Business.findByIdAndUpdate(
      req.params.id,
      { $set: { settings: req.body } },
      { new: true, runValidators: true }
    );
    if (!business) {
      return res.status(404).json(createError('Business not found'));
    }
    res.status(200).json(business);
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
};

// Update business subscription
export const updateBusinessSubscription = async (req: Request, res: Response) => {
  try {
    const { subscriptionPlan } = req.body;
    const business = await Business.findByIdAndUpdate(
      req.params.id,
      { $set: { subscriptionPlan } },
      { new: true, runValidators: true }
    );
    if (!business) {
      return res.status(404).json(createError('Business not found'));
    }
    res.status(200).json(business);
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
};

// Update business status
export const updateBusinessStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const business = await Business.findByIdAndUpdate(
      req.params.id,
      { $set: { status } },
      { new: true, runValidators: true }
    );
    if (!business) {
      return res.status(404).json(createError('Business not found'));
    }
    res.status(200).json(business);
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
}; 