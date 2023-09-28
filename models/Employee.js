import { DataTypes } from 'sequelize';
const Employee = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    National_id: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    agency_id: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: false 
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false 
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true 
    }
  });

  Employee.associate = models => {
    Employee.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false
      }
    });
    Employee.belongsTo(models.Agency, {
      foreignKey: {
        allowNull: false
      }
    });
    Employee.belongsTo(models.Job, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Employee;
};

export default Employee;
