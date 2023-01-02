/**
 * =============================================================================
 * SEQUELIZE CONFIGURATION
 * =============================================================================
 */

const {Sequelize} = require('sequelize');
const env = require('./env');

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

exports.getSqlite = new Sequelize({
  dialect: 'sqlite',
  storage: `${env.sqlitePath}${env.sqliteDatabase}`,
  logging: env.dbLogging,
});

/**
 * -----------------------------------------------------------------------------
 * Option 3: Passing parameters separately (other dialects)
 * -----------------------------------------------------------------------------
 * NOTE: Dialect is one of... 'mysql' | 'postgres' | 'sqlite' | 'mariadb' |
 * 'mssql' | 'db2' | 'snowflake' | 'oracle'
 * -----------------------------------------------------------------------------
 */

exports.getDialect = new Sequelize(
    env.dbDatabase,
    env.dbUsername,
    env.dbPassword,
    {
      host: env.dbHostname,
      dialect: env.dbConnection,
      logging: env.sqliteLogging,
    },
);
