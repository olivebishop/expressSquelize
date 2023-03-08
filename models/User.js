import { DataTypes } from 'sequelize';

import sequelize from '../config/db.js';

const User = sequelize.define('user', {
   
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
},

});

sequelize.sync();

export default User;