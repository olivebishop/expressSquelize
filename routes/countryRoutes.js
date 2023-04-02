import express from 'express';
import { createCountry, getAllCountries, getCountryById, updateCountryById, deleteCountryById } from '../controllers/countryController.js';

const router = express.Router();

router.get('/countries', getAllCountries);

router.get('/countries/:id', getCountryById);

router.post('/countries', createCountry);

router.patch('/countries/:id', updateCountryById);

router.delete('/countries/:id', deleteCountryById);

export default router;
