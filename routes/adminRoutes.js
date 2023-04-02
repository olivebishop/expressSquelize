import express from 'express';
import { createAdmin, getAllAdmins, getAdminById, updateAdminById, deleteAdminById } from '../controllers/adminController.js';

const router = express.Router();

router.get('/admins', getAllAdmins);

router.get('/admins/:id', getAdminById);

router.post('/admins', createAdmin);

router.patch('/admins/:id', updateAdminById);

router.delete('/admins/:id', deleteAdminById);

export default router;
