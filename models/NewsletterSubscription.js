// models/NewsletterSubscription.js

import { DataTypes } from 'sequelize';
//import db from '../config/db.js';
import db from "../models/index.js";

const sequelize = db.sequelize;

const NewsletterSubscription = sequelize.define(
  'NewsletterSubscription',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    subscribedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
  }
);

export default NewsletterSubscription;
