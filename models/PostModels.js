const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = require('../config/sequelize').forDialect;

/**
 * Post model
 */
class Post extends Model {}

Post.init({
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
