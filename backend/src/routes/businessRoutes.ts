import express from 'express';
import {
  createBusiness,
  getAllBusinesses,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
  updateBusinessSettings,
  updateBusinessSubscription,
  updateBusinessStatus,
} from '../controllers/businessController';
import { authenticateToken, authorizeRoles } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/', createBusiness);

// Protected routes
router.use(authenticateToken);

// Admin only routes
router.get('/', authorizeRoles(['admin']), getAllBusinesses);

// Business owner routes
router.get('/:id', getBusinessById);
router.put('/:id', updateBusiness);
router.delete('/:id', deleteBusiness);
router.put('/:id/settings', updateBusinessSettings);
router.put('/:id/subscription', updateBusinessSubscription);
router.put('/:id/status', updateBusinessStatus);

export default router; 