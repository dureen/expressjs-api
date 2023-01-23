/**
 * =============================================================================
 * SEQUELIZE CONFIGURATION
 * =============================================================================
 */

const {Sequelize} = require('sequelize');
const base = require('./base');

/**
 * -----------------------------------------------------------------------------
 * Option 1: Passing a connection URI
 * -----------------------------------------------------------------------------
 */
// const forURI = new Sequelize('sqlite::memory:') // Example for sqlite
// const forURI = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

/**
 * -----------------------------------------------------------------------------
 * Option 2: Passing parameters separately (sqlite)
 * -----------------------------------------------------------------------------
 */
const option2 = {
  dialect: 'sqlite',
  storage: base.sqlitePath + base.sqliteDatabase,
};
if (base.sqliteLogging === 'false') option2['logging']= false;

exports.getSqlite = new Sequelize(option2);

/**
 * -----------------------------------------------------------------------------
 * Option 3: Passing parameters separately (other dialects)
 * -----------------------------------------------------------------------------
 * NOTE: Dialect is one of... 'mysql' | 'postgres' | 'sqlite' | 'mariadb' |
 * 'mssql' | 'db2' | 'snowflake' | 'oracle'
 * -----------------------------------------------------------------------------
 */

const option3 = {
  host: base.dbHostname,
  dialect: base.dbConnection,
};
if (base.dbLogging === 'false') option3['logging']= false;

exports.getDialect = new Sequelize(
    base.dbDatabase,
    base.dbUsername,
    base.dbPassword,
    option3,
);
