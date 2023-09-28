// routes/newsletterRoutes.js

import express from 'express';
import { subscribe } from '../controllers/newsletterController.js';

const router = express.Router();

// Route to handle newsletter subscriptions
router.post('/', subscribe);

export default router;
