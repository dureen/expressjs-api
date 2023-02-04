/**
 * =============================================================================
 * BASE CONFIGURATION
 * =============================================================================
 */

const dotEnv = require('./dotEnv');

exports.env = dotEnv.base.BASE_ENV || 'production';
exports.debug = (dotEnv.base.BASE_DEBUG == 'true') ? true : false;
exports.tz = dotEnv.base.BASE_TIMEZONE;

// App
exports.name = dotEnv.app.APP_NAME || 'ExpressJs API';
exports.url = (dotEnv.base.BASE_ENV == 'development') ?
    `${dotEnv.app.APP_URL || 'http://localhost' }:${dotEnv.app.APP_PORT || 3030}` :
    `${dotEnv.app.APP_URL || 'http://localhost'}`;

exports.port = dotEnv.app.APP_PORT || 3030;

// SQL
exports.dbConnection = dotEnv.db.DB_CONNECTION || 'mysql';
exports.dbHostname = dotEnv.db.DB_HOSTNAME || '127.0.0.1';
exports.dbPort = dotEnv.db.DB_PORT || 3306;
exports.dbDatabase = dotEnv.db.DB_NAME || 'db-name';
exports.dbUsername = dotEnv.db.DB_USERNAME || 'root';
exports.dbPassword = dotEnv.db.DB_PASSWORD || '';
exports.dbLog = (dotEnv.db.DB_LOG == 'true') ? true : false;

// SQLite
exports.sqliteFile = dotEnv.sqlite.SQLITE_FILE || 'local.sqlite';
exports.sqlitePath = dotEnv.sqlite.SQLITE_PATH || 'database/';
exports.sqliteLog = (dotEnv.sqlite.SQLITE_LOG == 'true') ? true : false;

// MOngoDB
exports.mongoURL = dotEnv.mongo.MONGODB_URL;

// Blogger
exports.bloggerKey = dotEnv.blogger.BLOGGER_KEY;
