const bcrypt = require('bcrypt');
const {Sequelize, DataTypes, Model} = require('sequelize');
// import connection
const sequelize = require('../config/sequelize').getDialect;

// PROTECTED_ATTRIBUTES doesn't work on raw options, please avoud raw:true
const PROTECTED_ATTRIBUTES = ['password', 'remember_token'];

/**
 * User Model
 */
class UserModel extends Model {
  /**
   * @param {String} thisPass the plain text password
   * @return {string}
   */
  verifyPassword(thisPass) {
    const hashPass = /^\$2y\$/.test(this.password) ?
    '$2a$' + this.password.slice(4) : this.password;
    const x = bcrypt.compareSync(thisPass, hashPass);
    return x;
  }

  // From: https://gist.github.com/arivia/2afbf227595fb5db24149e69fa8736e7
  /**
   * Get json data unprotected attributes
   * @return {array}
   */
  toJSON() {
    const attributes = Object.assign({}, this.get());
    for (const a of PROTECTED_ATTRIBUTES) {
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
  timestamps: false,

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
