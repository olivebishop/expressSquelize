import { DataTypes } from 'sequelize';
const Employer = (sequelize, Sequelize) => {
const Employer = sequelize.define("employer", {
fullname: {
type: DataTypes.STRING,
allowNull: false
},
company_name: {
type: DataTypes.STRING,
allowNull: false
},
phone: {
type: DataTypes.STRING,
allowNull: false
},
email: {
type: DataTypes.STRING,
allowNull: false
},
address: {
type: DataTypes.STRING,
allowNull: false
},
city: {
type: DataTypes.STRING,
allowNull: false
},
state: {
type: DataTypes.STRING,
allowNull: false
},
country_id: {
type: DataTypes.INTEGER,
allowNull: false
}
});

Employer.associate = models => {
Employer.belongsTo(models.Country, {
foreignKey: {
allowNull: false
}
});
};

return Employer;
};

export default Employer;




