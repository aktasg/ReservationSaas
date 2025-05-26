import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { createError } from '../utils/error';

// Express Request interface'ini genişletiyoruz
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        businessId: string;
        role: string;
      };
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token;

    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json(createError('Access token is required'));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as { id: string };
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(401).json(createError('User not found'));
    }

    req.user = {
      id: user._id.toString(),
      businessId: user.businessId.toString(),
      role: user.role
    };
    
    next();
  } catch (error) {
    return res.status(403).json(createError('Invalid token'));
  }
};

export const authorizeRoles = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json(createError('User not authenticated'));
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json(createError('Not authorized to access this resource'));
    }

    next();
  };
};

export const authorize = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json(createError('User not authenticated'));
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json(createError('Not authorized to access this resource'));
    }

    next();
  };
};

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json(createError('Access token is required'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.user = decoded as any;
    next();
  } catch (error) {
    return res.status(403).json(createError('Invalid token'));
  }
}; 