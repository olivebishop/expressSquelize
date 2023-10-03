import express from 'express';
import { createCountry, getAllCountries, getCountryById, updateCountry, deleteCountry } from '../controllers/countryController.js';

const router = express.Router();

router.get('/countries', getAllCountries);

router.get('/countries/:id', getCountryById);

router.post('/countries', createCountry);

router.patch('/countries', updateCountry);

router.delete('/countries', deleteCountry);

export default router;
