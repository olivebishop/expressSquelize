import express from 'express';

import { createUserRole, getAllUserRoles, getUserRoleById, updateUserRoleById, deleteUserRoleById } from './../controllers/userRoleController.js';

const router = express.Router();

router.get('/user-role', getAllUserRoles);

router.get('/user-role/:id', getUserRoleById);

router.post('/user-role', createUserRole);

router.patch('/users/:usersId/roles/:rolesId', updateUserRoleById);

router.delete('/users/:users_id/roles/:roles_id', deleteUserRoleById);

export default router;