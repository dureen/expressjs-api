const bcrypt = require('bcrypt');
const {Sequelize, DataTypes, Model} = require('sequelize');
// import connection
const sequelize = require('../config/sequelize').getDialect;

/**
 * User Model Class
 */
class UserModel extends Model {
  protectedAttributes = [
    'password',
    'remember_token',
  ];

  /**
   * @param {String} plainPassword string of plain password
   * @return {boolean} boolean
   */
  verifyPassword(plainPassword) {
    let hashedPassword = this.password;
    if (/^\$2y\$/.test(this.password)) {
      hashedPassword = '$2a$' + this.password.slice(4);
    }
    return bcrypt.compareSync(plainPassword, hashedPassword);
  }

  /**
   * ---------------------------------------------------------------------------
   * Source: https://gist.github.com/arivia/2afbf227595fb5db24149e69fa8736e7
   * ---------------------------------------------------------------------------
   */

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

UserModel.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  email_verified_at: DataTypes.DATE,
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  level: DataTypes.SMALLINT,
  remember_token: DataTypes.STRING,
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
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,
  createdAt: true,
  updatedAt: true,

  // don't delete database entries but set the newly added attribute deletedAt
  // to the current date (when deletion was done). paranoid will only work if
  // timestamps are enabled
  //   paranoid: true,

  // don't use camelcase for automatically added attributes but underscore style
  // so updatedAt will be updated_at
  underscored: true,

  // disable the modification of tablenames; By default, sequelize will
  // automatically transform all passed model names (first parameter of define)
  // into plural. if you don't want that, set the following
  // freezeTableName: true,

  // define the table's name
  tableName: 'users',
});

module.exports = UserModel;
