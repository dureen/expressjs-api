const env = require('dotenv').config({debug: process.env.NODE_DEBUG});

const data = env.parsed;

exports.node = Object.fromEntries(
    Object.entries(data)
        .filter(([key, value])=>key.startsWith('NODE_')),
);

exports.app = Object.fromEntries(
    Object.entries(data)
        .filter(([key, value])=>key.startsWith('APP_')),
);

exports.bot = Object.fromEntries(
    Object.entries(data)
        .filter(([key, value])=>key.startsWith('BOT_')),
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


