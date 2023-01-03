const {DataTypes, Model} = require('sequelize');

const sequelize = require('../config/sequelize').getSqlite;

/**
 * Book Model
 */
class BookModel extends Model {
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
  tableName: 'books',
  // underscored: true,
});

BookModel.sync();

module.exports = BookModel;
