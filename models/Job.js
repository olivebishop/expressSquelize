import { DataTypes } from 'sequelize';
const Job = (sequelize, Sequelize) => {
const Job = sequelize.define("job", {
title: {
type: DataTypes.STRING,
allowNull: false
},
description: {
type: DataTypes.TEXT,
allowNull: false
},
job_requirements: {
type: DataTypes.TEXT,
allowNull: false
},
type: {
type: DataTypes.ENUM('full-time', 'part-time', 'contract'),
allowNull: false
},
salary_range: {
type: DataTypes.STRING,
allowNull: false
},

});

Job.associate = models => {
Job.belongsTo(models.Location, {
foreignKey: {
allowNull: false
}
});
Job.belongsTo(models.Employer, {
foreignKey: {
allowNull: false
}
});
};

return Job;
};

export default Job;




