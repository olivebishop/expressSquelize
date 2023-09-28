import { DataTypes } from 'sequelize';

const Admin = (sequelize, Sequelize) => {
  const Admin = sequelize.define('admin', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Define associations
  Admin.associate = (models) => {
    // One-to-one relationship with User
    Admin.hasOne(models.User, {
      foreignKey: 'adminId',
      as: 'user', // Alias to access the associated user
    });
  };

  // Assign an account type (role) to a user
  Admin.prototype.assignAccountType = async function (userId, roleId) {
    const user = await this.getUser(); // Assumes you have a `getUser` method in your Admin model
    if (user) {
      // Update the user's role
      await user.update({ roleId });
    }
  };

  // View all users with their account type
  Admin.prototype.viewUsersWithAccountType = async function () {
    const user = await this.getUser(); // Assumes you have a `getUser` method in your Admin model
    if (user) {
      // Access the associated user's account type
      const accountType = user.accountType;
      return { user, accountType };
    }
    return null;
  };

  return Admin;
};

export default Admin;
