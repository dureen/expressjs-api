const {DataTypes, Model} = require('sequelize');

const sequelize = require('../config/sequelize').getSqlite;

/**
 * Feedback Model
 */
class FeedbackModel extends Model {
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
