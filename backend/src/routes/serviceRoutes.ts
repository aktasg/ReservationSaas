import express from 'express';
import {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
  updateStatus,
  getActiveServices,
} from '../controllers/serviceController';
import { authenticateToken, authorizeRoles } from '../middleware/auth';

const router = express.Router();

// All routes are protected
router.use(authenticateToken);

// Service management routes
router.post('/', authorizeRoles(['admin']), createService);
router.get('/', getServices);
router.get('/active', getActiveServices);
router.get('/:id', getServiceById);
router.put('/:id', authorizeRoles(['admin']), updateService);
router.delete('/:id', authorizeRoles(['admin']), deleteService);
router.put('/:id/status', authorizeRoles(['admin']), updateStatus);

export default router; 