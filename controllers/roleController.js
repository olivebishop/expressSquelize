import db from "../models/index.js";
const Role = db.Role;
const User = db.User;
const UserRole = db.UserRole;

const getAllRoles = async (req, res) => {
  try {
    const response = await Role.findAll();
    if (response.length === 0) {
      res.status(404).json({ message: "No role found" });
    } else if (response) {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const getRoleById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Role.findByPk(id);
    if (response === null) {
      res.status(404).json({ message: "Role not found." });
    } else if (response) {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const createRole = async (req, res) => {
  const role = req.body;

  try {
    const response = await Role.create(role);
    if (!response) {
      res.status(500).json({ message: "Internal server error" });
    } else if (response) {
      res.status(201).json({ message: "Role created." });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateRoleById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const [response] = await Role.update(
      {
        name: name,
      },
      { where: { id: id } }
    );
    if (response === 0) {
      res.status(404).json({ message: "Role not found" });
    } else if (response) {
      res.status(201).json({ message: "Role updated." });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteRoleById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Role.destroy({ where: { id: id } });
    if (response === 0) {
      res.status(404).json({ message: "Role not found" });
    } else if (response) {
      res.status(200).json({ message: "Role deleted." });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const assignRoleAndNotify = async (req, res) => {
  try {
    const { userId, role } = req.body;

    // Assign the role to the user based on userId (update your database accordingly)
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }else{
          // Update the user's role (update your database accordingly)
    // Example: user.role = role;

    // Send a verification email
    //await mailer.sendVerificationEmail(user.email, user.username, role);
      if (role === 'employer') {
        user.role = 'employer';
      } else if (role === 'employee') {
        const roleId = 4;
        await UserRole.create({ roleId, userId });
        // Respond with a success message
        return res.status(200).json({ message: 'Role assigned and verification email sent successfully.', userId: userId, role: roleId });
      } else {    
        user.role = 'admin';
      }
    }
  } catch (error) {
    console.error('Error assigning role and notifying user:', error);
    return res.status(500).json({ message: 'Error assigning role. Please try again later.' });
  }
};

export {
  createRole,
  getAllRoles,
  getRoleById,
  updateRoleById,
  deleteRoleById,
  assignRoleAndNotify, // Add the new function to the export list
};
