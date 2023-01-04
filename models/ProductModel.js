const {DataTypes, Model} = require('sequelize');

const sequelize = require('../config/sequelize').getSqlite;

/**
 * Product Model
 */
class ProductModel extends Model {
  protectedAttributes = [];


  /**
   * Hide protected attributes
   * @return {array}
   */
  toJSON() {
    const attributes = Object.assign({}, this.get());
    for (const a of this.protectedAttributes) {
      delete attributes[a];
    }
    return attributes;
  }
}

ProductModel.init({
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
  updatedAt: true,
  // freezeTableName: true,
  tableName: 'products',
  // underscored: true,
});

// ProductModel.drop();
ProductModel.sync();

module.exports = ProductModel;
