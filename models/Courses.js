import { DataTypes } from 'sequelize';

const Courses = (sequelize, Sequelize) => {
  const Courses = sequelize.define("courses", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Courses;
};

export default Courses;
