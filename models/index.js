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



// relationship btn users and model such as agency, admin, employee and employer (one to one relationship)
// ...
// one-to-one relationship between User and Agency
import Agency from './Agency.js';
db.Agency = Agency(sequelize, Sequelize);
db.User.hasOne(db.Agency, { foreignKey: 'userId', as: 'agency' });
db.Agency.belongsTo(db.User, { foreignKey: 'userId' });

 //one-to-one relationship between User and Admin
import Admin from './Admin.js';
db.Admin = Admin(sequelize, Sequelize);
db.User.hasOne(db.Admin, { foreignKey: 'userId', as: 'admin' });
db.Admin.belongsTo(db.User, { foreignKey: 'userId' });

// one-to-one relationship between User and Employer
import Employer from './Employer.js';
db.Employer = Employer(sequelize, Sequelize);
db.User.hasOne(db.Employer, { foreignKey: 'userId', as: 'employer' });
db.Employer.belongsTo(db.User, { foreignKey: 'userId' });

// one-to-one relationship between User and Employee
import Employee from './Employee.js';
db.Employee = Employee(sequelize, Sequelize);
db.User.hasOne(db.Employee, { foreignKey: 'userId', as: 'employee' });
db.Employee.belongsTo(db.User, { foreignKey: 'userId' });

// ...

// Inside your User models (e.g., Employer.js, Employee.js, etc.)
//db.User.belongsTo(db.Country, { foreignKey: 'countryId', as: 'country' });

import Job from './Job.js';
db.Job = Job(sequelize, Sequelize);

import Application from './Application.js';
db.Application = Application(sequelize, Sequelize);

db.Job.belongsToMany(db.Application, {
  through: "job_applications",
  foreignKey: "jobId",
  otherKey: "applicationId"
});
db.Application.belongsToMany(db.Job, {
  through: "job_roles",
  foreignKey: "applicationId",
  otherKey: "jobId"
});




export default db;