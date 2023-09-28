import express from 'express';
import {createApplication, getApplicationById, getAllApplications, updateApplication, deleteApplication} from '../controllers/applicationController.js';
// import { checkPermissions } from '../middlewares/permissionMiddlewares.js';

const router = express.Router();

// Apply the authorization middleware to routes as needed
router.get('/applications', getAllApplications);
router.get('/applications/:id', getApplicationById);
router.post('/applications', createApplication);
router.patch('/applications/:id',  updateApplication);
router.delete('/applications/:id',  deleteApplication);

export default router;
