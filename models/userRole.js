import { DataTypes } from 'sequelize';

const UserRole = (sequelize, Sequelize) => {
    const UserRole = sequelize.define("user_role", {
      roleId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }

    });
    return UserRole;
  };

  export default UserRole;