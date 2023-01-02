const UserModel = require('../models/UserModel');

exports.index = async (req, res) => {
  // res.send('/GET index of users');
  // ALERT: PLEASE AVOID USING ({ raw: true }),
  // because all hidden data will appears
  const users = await UserModel.findAll().catch(console.error);
  const jsonString = JSON.stringify(users, null, 2);
  res.json(JSON.parse(jsonString));
};

exports.store = async (req, res) => {
  res.send('/POST user data');
};

exports.show = async (req, res) => {
  // res.send('/GET user id: ' + req.params.userId);
  const user = await UserModel.findByPk(req.params.userId).catch(console.error);
  const jsonString = JSON.stringify(user, null, 2);
  res.json(JSON.parse(jsonString));
};

exports.update = async (req, res) => {
  res.send('/PUT user id: ' + req.params.userId);
};

exports.destroy = async (req, res) => {
  res.send('/DELETE user id: ' + req.params.userId);
};
