const UserModel = require('../models/UserModel');
const resCode = require('../data/resources/resCode');

const bcrypt = require('bcrypt');

exports.index = async (req, res) => {
  /**
   * ---------------------------------------------------------------------------
   * Plase add {attributes} option if you are using { raw: true }) option.
   * Reason : all default attributes are visible when using raw option
   * ---------------------------------------------------------------------------
   */
  const result = await UserModel.findAll({
    attributes: [
      'id',
      'name',
      'email',
      'email_verified_at',
      'level',
    ],
  }).catch(console.error);
  resCode.set200(res, result);
};

// to-do: validation
exports.store = async (req, res) => {
  if (!req.body.name) {
    return resCode.set403(res, 'name field is required.');
  }
  if (!req.body.email) {
    return resCode.set403(res, 'email field is required.');
  }
  if (!req.body.password) {
    return resCode.set403(res, 'password field is required.');
  }
  if (!req.body.cpassword) {
    return resCode.set403(res, 'cpassword field is required.');
  }
  if (req.body.password !== req.body.cpassword) {
    return resCode.set403(res, 'The password confirm doesn\'t match.');
  }

  const saltRounds = 10;
  const myPlaintextPassword = req.body.password;
  const hashedPassword = await bcrypt.hash(myPlaintextPassword, saltRounds);

  const data = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    level: 1,
  };

  const result = await UserModel.create(data);
  if (!result) {
    resCode.set422(res);
  } else {
    resCode.set201(res, result, 'Created a new user.');
  }
};

exports.show = async (req, res) => {
  const userId = req.params.userId;
  const result = await UserModel.findByPk(userId)
      .catch(console.error);
  if (!result) {
    resCode.set404(res);
  } else {
    resCode.set200(res, result);
  }
};

// to-do: validation
exports.update = async (req, res) => {
  const userId = req.params.userId;
  const data = await UserModel.findByPk(userId)
      .catch(console.error);
  if (!data) {
    resCode.set404(res);
  } else {
    data.set({
      name: req.body.name || data.name,
      email: req.body.email || data.email,
      password: req.body.password || data.password, // to-do: bycript
      level: req.body.level || data.level,
    });

    const result = await data.save();
    if (!result) {
      resCode.set422(res);
    } else {
      resCode.set200(res, result, `Updated. ID: ${userId}`);
    }
  }
};

exports.destroy = async (req, res) => {
  const userId = req.params.userId;
  const data = await UserModel.findByPk(userId)
      .catch(console.error);
  if (!data) {
    resCode.set404(res);
  } else {
    const result = await data.destroy();
    if (!result) {
      resCode.set422(res);
    } else {
      resCode.set200(res, result, `Deleted. ID: ${userId}`);
    }
  }
};
