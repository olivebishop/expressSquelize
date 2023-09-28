import { DataTypes } from 'sequelize';

const Payment = (sequelize, Sequelize) => {
  const Payment = sequelize.define('payment', {
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT, 
    },
    paymentDate: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true, 
    tableName: 'payments', 
    
  });

  return Payment;
};

export default Payment;

