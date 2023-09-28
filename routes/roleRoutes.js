// Import necessary modules and functions from mailer.js
import express from 'express';
import nodemailer from 'nodemailer'; // Import nodemailer
import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRoleById,
  deleteRoleById,
  assignRoleAndNotify,
} from '../controllers/roleController.js';

const router = express.Router();

// Route for creating a new role
router.post('/roles', createRole);

// Route for getting all roles
router.get('/roles', getAllRoles);

// Route for getting a role by ID
router.get('/roles/:id', getRoleById);

// Route for updating a role by ID
router.patch('/roles/:id', updateRoleById);

// Route for deleting a role by ID
router.delete('/roles/:id', deleteRoleById);

// Route for assigning roles and sending verification emails
router.post('/assignRoleAndNotify', assignRoleAndNotify);



export default router;
