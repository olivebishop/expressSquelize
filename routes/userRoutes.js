import express from 'express';
import { createUser, getAllUsers, getUserById, updateUserById, deleteUserById, updateUserProfile } from '../controllers/userControllers.js';

const router = express.Router();

// Your existing routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);

// New route for updating the user's profile
router.post('/users/:id/update-profile', updateUserProfile);

export default router;