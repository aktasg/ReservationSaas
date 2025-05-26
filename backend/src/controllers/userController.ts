import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import { createError } from '../utils/error';
import jwt from 'jsonwebtoken';

// Register new user
export const register = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();

    const token = jwt.sign(
      { id: user._id, businessId: user.businessId, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );

    res.status(201).json({
      success: true,
      data: {
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        token,
      },
    });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json(createError('Email already exists'));
    }
    res.status(400).json(createError(error.message));
  }
};

// Login user
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json(createError('Invalid email or password'));
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json(createError('Invalid email or password'));
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign(
      { id: user._id, businessId: user.businessId, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );

    res.status(200).json({
      success: true,
      data: {
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        token,
      },
    });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Get user profile
export const getProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json(createError('User not found'));
    }
    res.status(200).json({ success: true, data: user });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Update user profile
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const updates = req.body;
    delete updates.password; // Prevent password update through this route
    delete updates.role; // Prevent role update through this route
    delete updates.businessId; // Prevent businessId update through this route

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json(createError('User not found'));
    }

    res.status(200).json({ success: true, data: user });
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
};

// Change password
export const changePassword = async (req: Request, res: Response) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json(createError('User not found'));
    }

    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json(createError('Current password is incorrect'));
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ success: true, message: 'Password updated successfully' });
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
};

// Get all users for a business (admin only)
export const getBusinessUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({ businessId: req.user.businessId }).select('-password');
    res.status(200).json({ success: true, data: users });
  } catch (error: any) {
    res.status(500).json(createError(error.message));
  }
};

// Update user status (admin only)
export const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const user = await User.findOneAndUpdate(
      { _id: req.params.id, businessId: req.user.businessId },
      { $set: { status } },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json(createError('User not found'));
    }

    res.status(200).json({ success: true, data: user });
  } catch (error: any) {
    res.status(400).json(createError(error.message));
  }
}; 