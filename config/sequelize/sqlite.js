const {Sequelize} = require('sequelize');
const base = require('../base');

const data = {
  dialect: 'sqlite',
  storage: base.sqlitePath + base.sqliteFile,
};
if (!base.sqliteLog) data['logging']= false;

exports.db = new Sequelize(data);
