import { DataTypes } from 'sequelize';

const Location = (sequelize, Sequelize) => {
  const Location = sequelize.define('location', {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Location.associate = (models) => {
    Location.belongsTo(models.Country, {
      foreignKey: 'countryId', // Use the correct foreign key name
      allowNull: false,
    });
  };

  return Location;
};

export default Location;
