import express from 'express';
import { createContract, getAllContracts, getContractById, updateContractById, deleteContractById } from '../controllers/contractController.js';

const router = express.Router();

router.get('/contracts', getAllContracts);

router.get('/contracts/:id', getContractById);

router.post('/contracts', createContract);

router.patch('/contracts/:id', updateContractById);

router.delete('/contracts/:id', deleteContractById);

export default router;
