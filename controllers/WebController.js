const base = require('../config/base');

// const baseName = base.appName;
const baseUrl = base.appURL;

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


