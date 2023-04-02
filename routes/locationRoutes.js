import express from 'express';
import { createLocation, getAllLocations, getLocationById, updateLocationById, deleteLocationById } from '../controllers/locationController.js';

const router = express.Router();

router.get('/locations', getAllLocations);

router.get('/locations/:id', getLocationById);

router.post('/locations', createLocation);

router.patch('/locations/:id', updateLocationById);

router.delete('/locations/:id', deleteLocationById);

export default router;
