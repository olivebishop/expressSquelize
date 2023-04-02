import { DataTypes } from 'sequelize';
const Admin = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admin", {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false 
    }
  });
  return Admin;
};

export default Admin;
