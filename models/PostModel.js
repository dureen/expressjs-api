const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = require('../config/sequelize').getDialect;
const UserModel = require('./UserModel');
/**
 * Post Model
 */
class PostModel extends Model {
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

PostModel.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    name: 'userId',
    field: 'user_id',
    references: 'users',
    referencesKey: 'id',
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
  createdAt: {
    field: 'created_at',
    type: Sequelize.DATE,
  },
  updatedAt: {
    field: 'updated_at',
    type: Sequelize.DATE,
  },
}, {
  sequelize,
  timestamps: false,
  // paranoid: true,
  underscored: true,
  // freezeTableName: true,
  tableName: 'posts',
});

PostModel.belongsTo(UserModel, {
  foreignKey: {
    name: 'userId',
    field: 'user_id',
  },
  onDelete: 'NO ACTION',
  onUpdate: 'CASCADE',
});

module.exports = PostModel;
