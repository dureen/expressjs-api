/**
 * =============================================================================
 * BASE CONFIGURATION
 * =============================================================================
 */

const env = require('./dotEnv');

exports.nodeEnv = env.node.NODE_ENV || 'production';
exports.nodeDebug = env.app.NODE_DEBUG ? true : false;

// App
exports.appName = env.app.APP_NAME || 'ExpressJs API';
exports.appURL = env.node.NODE_ENV === 'development' ?
    `${env.app.APP_URL || 'http://localhost' }:${env.app.APP_PORT}` :
    `${env.app.APP_URL || 'http://localhost'}`;

exports.appPort = env.app.APP_PORT || 3030;

// Default Databases
exports.dbConnection = env.db.DB_CONNECTION || 'mysql';
exports.dbHostname = env.db.DB_HOSTNAME || '127.0.0.1';
exports.dbPort = env.db.DB_PORT || 3306;
exports.dbDatabase = env.db.DB_NAME || 'db-name';
exports.dbUsername = env.db.DB_USERNAME || 'root';
exports.dbPassword = env.db.DB_PASSWORD || '';
exports.dbLogging = env.db.DB_LOG==='true' ? true : false;

// SQLite Databases
exports.sqliteDatabase = env.sqlite.SQLITE_NAME || 'local.sqlite';
exports.sqlitePath = env.sqlite.SQLITE_PATH || 'databases/sqlite/';
exports.sqliteLogging = env.sqlite.SQLITE_LOG ? true : false;
