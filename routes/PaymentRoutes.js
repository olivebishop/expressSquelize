import express from 'express';
import paymentController from '../controllers/paymentController.js';

const router = express.Router();

// Define the route to fetch transactions
router.get('/transactions', paymentController.fetchTransactions);

export default router;
