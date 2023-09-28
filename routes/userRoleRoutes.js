// userRole.js route file
import express from 'express';

import {
  createUserRole,
  getAllUserRoles,
  getUserRoleById,
  updateUserRoleById,
  deleteUserRoleById,
} from '../controllers/UserRoleController.js';

const router = express.Router();

// Existing routes for getting, creating, and deleting user roles

// Add the route to assign a role to a user
router.put('/users/:id/roles', async (req, res) => {
  const userId = req.params.id;
  const { roleId } = req.body;

  try {
    // Update the user's role in your database based on userId and roleId
    // Your Sequelize code to update the user's role goes here

    // Respond with a success message
    res.status(200).json({ message: 'Role assigned successfully' });
  } catch (error) {
    // Handle errors and respond with an error message
    console.error('Error assigning role:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
