import { Sequelize } from 'sequelize';

import sequelize from '../config/db.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import User from './User.js';
db.User = User(sequelize, Sequelize);

import Role from './Role.js';
db.Role = Role(sequelize, Sequelize);

import UserRole from './userRole.js';
db.UserRole = UserRole(sequelize, Sequelize);

db.Role.belongsToMany(db.User, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.User.belongsToMany(db.Role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

// relationship btwn report and user
import Report from './Report.js';
db.Report = Report(sequelize, Sequelize);
db.User.hasMany(db.Report,{
  foreignKey: "user_id",
});
db.Report.belongsTo(db.User);


export default db;