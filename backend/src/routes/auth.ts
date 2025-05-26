import express from 'express';
import { register, login, getMe, getAllUsers, updateUserStatus } from '../controllers/auth';
import { protect } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', protect, getMe);

// Super-admin routes
router.get('/users', protect, getAllUsers);
router.put('/users/:userId/status', protect, updateUserStatus);

export default router; 