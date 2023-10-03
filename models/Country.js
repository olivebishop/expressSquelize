import { DataTypes } from 'sequelize';

const Country = (sequelize, Sequelize) => {
  const Country = sequelize.define('country', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Define the one-to-many relationship with Location
  Country.hasMany(sequelize.models.Location, { foreignKey: 'countryId' });

  return Country;
};

export default Country;
