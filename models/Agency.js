import { DataTypes } from 'sequelize';
const Agency = (sequelize, Sequelize) => {
  const Agency = sequelize.define("agency", {
    name: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    license_number: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    phone: {
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
  return Agency;
};

export default Agency;
