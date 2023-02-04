const env = require('dotenv')
    .config({
      debug: (process.env.BASE_DEBUG == 'true') ? true : false,
    });

const data = env.parsed;

exports.base = Object.fromEntries(
    Object.entries(data)
        .filter(([key, value])=>key.startsWith('BASE_')),
);

exports.app = Object.fromEntries(
    Object.entries(data)
        .filter(([key, value])=>key.startsWith('APP_')),
);

exports.db = Object.fromEntries(
    Object.entries(data)
        .filter(([key, value])=>key.startsWith('DB_')),
);

exports.sqlite = Object.fromEntries(
    Object.entries(data)
        .filter(([key, value])=>key.startsWith('SQLITE_')),
);

exports.mongo = Object.fromEntries(
    Object.entries(data)
        .filter(([key, value])=>key.startsWith('MONGODB_')),
);

exports.blogger = Object.fromEntries(
    Object.entries(data)
        .filter(([key, value])=>key.startsWith('BLOGGER_')),
);

