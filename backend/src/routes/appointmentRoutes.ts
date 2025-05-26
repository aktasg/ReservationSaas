import express from 'express';
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
  updateStatus,
  getAppointmentsByDateRange,
  getAppointmentsByEmployee,
} from '../controllers/appointmentController';
import { authenticateToken, authorizeRoles } from '../middleware/auth';

const router = express.Router();

// All routes are protected
router.use(authenticateToken);

// Appointment management routes
router.post('/', createAppointment);
router.get('/', getAppointments);
router.get('/:id', getAppointmentById);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);
router.put('/:id/status', updateStatus);

// Filtered appointment routes
router.get('/date-range', getAppointmentsByDateRange);
router.get('/employee', getAppointmentsByEmployee);

export default router; 