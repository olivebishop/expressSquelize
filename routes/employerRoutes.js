import express from 'express';
import { createEmployer, getAllEmployers, getEmployerById, updateEmployerById, deleteEmployerById } from '../controllers/employerController.js';

const router = express.Router();

router.get('/employers', getAllEmployers);

router.get('/employers/:id', getEmployerById);

router.post('/employers', createEmployer);

router.patch('/employers/:id', updateEmployerById);

router.delete('/employers/:id', deleteEmployerById);

export default router;
