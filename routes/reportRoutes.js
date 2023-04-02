import express from 'express';
import { createReport, getAllReports, getReportById, updateReportById, deleteReportById } from '../controllers/reportController.js';

const router = express.Router();

router.get('/reports', getAllReports);

router.get('/reports/:id', getReportById);

router.post('/reports', createReport);

router.patch('/reports/:id', updateReportById);

router.delete('/reports/:id', deleteReportById);

export default router;
