const {DataTypes, Model} = require('sequelize');

const sequelize = require('../config/sequelize').forSQLite;

/**
 * Book Model
 */
class BookModel extends Model {}

BookModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  price: DataTypes.STRING,
}, {
  sequelize,
  timestamps: true,
  createdAt: true,
  updatedAt: false,
  // freezeTableName: true,
  tableName: 'feedbacks',
  // underscored: true,
});

module.exports = BookModel;
