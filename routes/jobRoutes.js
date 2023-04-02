import express from 'express';
import { createJob, getAllJobs, getJobById, updateJobById, deleteJobById } from '../controllers/jobController.js';

const router = express.Router();

router.get('/jobs', getAllJobs);

router.get('/jobs/:id', getJobById);

router.post('/jobs', createJob);

router.patch('/jobs/:id', updateJobById);

router.delete('/jobs/:id', deleteJobById);

export default router;
