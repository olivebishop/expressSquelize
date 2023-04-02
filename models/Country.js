import { DataTypes } from 'sequelize';
const Country = (sequelize, Sequelize) => {
  const Country = sequelize.define("country", {
    name: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false 
    }
  });
  return Country;
};

export default Country;
