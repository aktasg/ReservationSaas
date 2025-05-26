import express from 'express';
import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  updateWorkingHours,
  updateServices,
  updateStatus,
} from '../controllers/employeeController';
import { authenticateToken, authorizeRoles } from '../middleware/auth';

const router = express.Router();

// All routes are protected
router.use(authenticateToken);

// Employee management routes
router.post('/', authorizeRoles(['admin']), createEmployee);
router.get('/', getEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', authorizeRoles(['admin']), updateEmployee);
router.delete('/:id', authorizeRoles(['admin']), deleteEmployee);

// Employee specific routes
router.put('/:id/working-hours', authorizeRoles(['admin']), updateWorkingHours);
router.put('/:id/services', authorizeRoles(['admin']), updateServices);
router.put('/:id/status', authorizeRoles(['admin']), updateStatus);

export default router; 