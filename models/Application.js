import { DataTypes } from 'sequelize';

const Application = (sequelize, Sequelize) => {
    const Application = sequelize.define("application", {
      name: {
        type: DataTypes.STRING,
        allowNull:false 
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false 
      },
      phone: {
        type: DataTypes.STRING,
        allowNull:false 
      }
    });
    return Application;
  };

  export default Application;