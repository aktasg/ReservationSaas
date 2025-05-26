import express from 'express';
import { protect } from '../middleware/auth';
import {
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from '../controllers/appointment';

const router = express.Router();

// Tüm rotalar korumalı
router.use(protect);

router.route('/')
  .get(getAllAppointments)
  .post(createAppointment);

router.route('/:id')
  .put(updateAppointment)
  .delete(deleteAppointment);

export default router; 