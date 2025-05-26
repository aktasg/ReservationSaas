import express from 'express';
import { protect } from '../middleware/auth';
import {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employee';

const router = express.Router();

// Tüm rotalar korumalı
router.use(protect);

router.route('/')
  .get(getAllEmployees)
  .post(createEmployee);

router.route('/:id')
  .put(updateEmployee)
  .delete(deleteEmployee);

export default router; 