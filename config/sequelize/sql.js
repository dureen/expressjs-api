const {Sequelize} = require('sequelize');
const base = require('../base');

const data = {
  host: base.dbHostname,
  dialect: base.dbConnection,
};
if (!base.dbLog) data['logging']= false;

exports.db = new Sequelize(
    base.dbDatabase,
    base.dbUsername,
    base.dbPassword,
    data,
);
