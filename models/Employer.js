import { DataTypes } from 'sequelize';

const Employer = (sequelize, Sequelize) => {
  const Employer = sequelize.define('employer', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    verification_status: {
      type: DataTypes.STRING, // You can adjust the data type as needed
      allowNull: false,
      defaultValue: 'pending', // Default to 'pending' status
    },
    account_type: {
      type: DataTypes.STRING, // You can adjust the data type as needed
      allowNull: false,
    },
    // Add other attributes as needed
    company_details: {
      type: DataTypes.TEXT, // Corrected data type to DataTypes.TEXT
    },
  });

  // Associations with other models...
  Employer.associate = (models) => {
    Employer.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  // Define a method to update verification status
  Employer.prototype.approve = async function () {
    this.verification_status = 'verified';
    await this.save();
  };

  // Define a method to submit company details
  Employer.prototype.submitCompanyDetails = async function (details) {
    // Save the company details in the 'company_details' field
    this.company_details = details;
    await this.save();
  };

  return Employer;
};

export default Employer;
