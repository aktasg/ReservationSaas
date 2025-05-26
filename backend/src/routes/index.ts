import express from 'express';
import businessRoutes from './businessRoutes';
import userRoutes from './userRoutes';
import employeeRoutes from './employeeRoutes';
import serviceRoutes from './serviceRoutes';
import appointmentRoutes from './appointmentRoutes';

const router = express.Router();

// API routes
router.use('/api/businesses', businessRoutes);
router.use('/api/users', userRoutes);
router.use('/api/employees', employeeRoutes);
router.use('/api/services', serviceRoutes);
router.use('/api/appointments', appointmentRoutes);

export default router; 