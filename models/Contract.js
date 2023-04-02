import { DataTypes } from 'sequelize';

const Contract = (sequelize, Sequelize) => {
  const Contract = sequelize.define('contract', {
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive', 'terminated'),
      allowNull: false,
      defaultValue: 'active'
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Contract.associate = models => {
    Contract.belongsTo(models.Employee, {
      foreignKey: {
        allowNull: false
      }
    });
    Contract.belongsTo(models.Employer, {
      foreignKey: {
        allowNull: false
      }
    });
    Contract.belongsTo(models.Job, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Contract;
};

export default Contract;
