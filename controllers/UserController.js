const UserModel = require('../models/UserModel');

exports.index = async (req, res) => {
  /**
   * ---------------------------------------------------------------------------
   * PLEASE AVOID USING model ({ raw: true })
   * Reason : can cause hidden attribute to appear
   * ---------------------------------------------------------------------------
   */
  const data = await UserModel.findAll().catch(console.error);
  if (!data) {
    // code
  } else {
    // code
  }
  const jsonString = JSON.stringify(data, null, 2);
  res.json(JSON.parse(jsonString));
};

exports.store = async (req, res) => {
  res.send('/POST user data');
};

exports.show = async (req, res) => {
  const data = await UserModel.findByPk(req.params.userId)
      .catch(console.error);
  if (!data) {
    // code
  } else {
    // code
  }
  const jsonString = JSON.stringify(data, null, 2);
  res.json(JSON.parse(jsonString));
};

exports.update = async (req, res) => {
  const data = await UserModel.findByPk(req.params.userId)
      .catch(console.error);
  if (!data) {
    // code
  } else {
    // code
  }
  res.send('/PUT user id: ' + req.params.userId);
};

exports.destroy = async (req, res) => {
  const data = await UserModel.findByPk(req.params.userId)
      .catch(console.error);
  if (!data) {
    // code
  } else {
    // code
  }
  res.send('/DELETE user id: ' + req.params.userId);
};
