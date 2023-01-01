require('dotenv').config() || '';

const appName = process.env.AppName || 'ExpressJs API';
const appEnv = process.env.AppEnv || 'local';
const appDebug = process.env.AppDebug || true;
const appURL = process.env.AppURL || 'http://localhost';
const appPort = process.env.AppPort || 8080;

const dbConnection = process.env.DBConnection || 'mysql';
const dbHostname = process.env.DBHostname || '127.0.0.1';
const dbPort = process.env.DBPort || 3306;
const dbDatabase = process.env.DBDatabase || 'database-name';
const dbUsername = process.env.DBUsername || 'root';
const dbPassword = process.env.DBPassword || '';

module.exports = {
  appName,
  appEnv,
  appDebug,
  appURL,
  appPort,
  dbConnection,
  dbHostname,
  dbPort,
  dbDatabase,
  dbUsername,
  dbPassword,
};
