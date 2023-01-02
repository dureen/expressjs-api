const {DataTypes, Model} = require('sequelize');

const sequelize = require('../config/sequelize').forSQLite;

/**
 * Product Model
 */
class ProductModel extends Model {}

ProductModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
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

module.exports = ProductModel;
