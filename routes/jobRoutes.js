import express from 'express';
import { createJob, getAllJobs, getJobById, updateJob, deleteJob } from '../controllers/jobController.js';
// import { checkPermissions } from '../middlewares/permissionMiddlewares.js';
//import checkIsAgency from '../middlewares/auth.js';
const router = express.Router();

// Apply the authorization middleware to routes as needed
router.get('/jobs', getAllJobs);
router.get('/jobs/:id', getJobById);
router.post('/jobs', createJob);
router.patch('/jobs/:id',  updateJob);
router.delete('/jobs/:id',  deleteJob);
//router.post('/post-job', checkIsAgency, createJob);

export default router;
