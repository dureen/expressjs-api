const {Sequelize} = require('sequelize');
const env = require('./env');
// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    env.dbDatabase,
    env.dbUsername,
    env.dbPassword,
    {
      host: env.dbHostname,
      dialect: env.dbConnection,
    },
);
/**
 * NOTE: Dialect is one of... 'mysql' | 'postgres' | 'sqlite' | 'mariadb' |
 * 'mssql' | 'db2' | 'snowflake' | 'oracle'
 */

module.exports = sequelize;
