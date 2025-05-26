import express from 'express';
import {
  register,
  login,
  getProfile,
  updateProfile,
  changePassword,
  getBusinessUsers,
  updateUserStatus,
} from '../controllers/userController';
import { authenticateToken, authorizeRoles } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.use(authenticateToken);

// User routes
router.get('/profile', getProfile);
router.put('/profile', updateProfile);
router.put('/change-password', changePassword);

// Admin routes
router.get('/business', authorizeRoles(['admin']), getBusinessUsers);
router.put('/:id/status', authorizeRoles(['admin']), updateUserStatus);

export default router; 