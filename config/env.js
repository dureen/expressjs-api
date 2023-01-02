/**
 * =============================================================================
 * .ENV CONFIGURATION
 * =============================================================================
 */

require('dotenv').config() || '';

// App Details
exports.appName = process.env.AppName || 'ExpressJs API';
exports.appEnv = process.env.AppEnv || 'local';
exports.appDebug = process.env.AppDebug || true;
exports.appURL = process.env.AppURL || 'http://localhost';
exports.appPort = process.env.AppPort || 8080;

// Default Databases
exports.dbConnection = process.env.DBConnection || 'mysql';
exports.dbHostname = process.env.DBHostname || '127.0.0.1';
exports.dbPort = process.env.DBPort || 3306;
exports.dbDatabase = process.env.DBDatabase || 'database-name';
exports.dbUsername = process.env.DBUsername || 'root';
exports.dbPassword = process.env.DBPassword || '';

// SQLite Databases
exports.sqliteDatabase = process.env.SQLiteDatabase || 'data.sqlite';
exports.sqlitePath = process.env.SQLitePath || 'databases/sqlite/';
