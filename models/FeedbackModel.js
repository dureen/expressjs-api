const {DataTypes, Model} = require('sequelize');

const sequelize = require('../config/sequelize').forSQLite;

/**
 * Feedback Model
 */
class FeedbackModel extends Model {}

FeedbackModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.TEXT,
  content: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize,
  timestamps: true,
  createdAt: true,
  updatedAt: false,
  // freezeTableName: true,
  tableName: 'feedbacks',
  // underscored: true,
});

module.exports = FeedbackModel;
