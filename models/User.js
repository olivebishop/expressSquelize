import { DataTypes } from 'sequelize';

const User = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      fullname: {
        type: DataTypes.STRING,
        allowNull:false 
      },
      username: {
        type: DataTypes.STRING,
        allowNull:false 
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false 
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false 
      }
    });
    return User;
  };

  export default User;