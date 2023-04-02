import { DataTypes } from 'sequelize';

const Report = (sequelize, Sequelize) => {
  const Report = sequelize.define("report", {
    title: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false 
    },
    status: {
      type: DataTypes.ENUM('pending', 'in-progress', 'resolved'),
      allowNull: false 
    },
    priority: {
      type: DataTypes.ENUM('low', 'medium', 'high'),
      allowNull: false 
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    assigned_to: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    assigned_by: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    closed_at: {
      type: DataTypes.DATE,
      allowNull: true 
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Report;
};

export default Report;
