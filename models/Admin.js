import { DataTypes } from 'sequelize';

const Admin = (sequelize, Sequelize) => {
  const Admin = sequelize.define('admin', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    City: {
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

  // Sequelize hook before creating an Admin
  Admin.beforeCreate(async (admin) => {
    const user = await sequelize.models.User.create();

    // Associate the Admin with the User
    admin.userId = user.id;
  });

  return Admin;
};

export default Admin;
