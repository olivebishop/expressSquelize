import { DataTypes } from 'sequelize';

// import sequelize from '../config/db.js';

// const Role = sequelize.define('role', {

// name: { 
//     type: DataTypes.STRING, 
//     allowNull:false 
// },

// });

// sequelize.sync();

// export default Role;

const Role = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
      name: {
        type: DataTypes.STRING,
        allowNull:false 
      }
    });
    return Role;
  };

  export default Role;