const base = require('../helpers/base');
const baseUrl = (base.environment==='development') ?
    base.url + ':' + base.port :
    base.url;

exports.index = (req, res) => {
  res.render('index', {
    title: 'Home',
  });
};
exports.api = (req, res) => {
  res.render('pages/api', {
    title: 'API',
    baseUrl: baseUrl,
  });
};
exports.support = (req, res) => {
  res.render('pages/support', {
    title: 'Supports',
  });
};
exports.about = (req, res) => {
  res.render('pages/about', {
    title: 'Abouts',
  });
};


