const UserModel = require('../models/UserModel');
const respAPI = require('../data/resources/respAPI');

const bcrypt = require('bcrypt');

exports.index = async (req, res) => {
  /**
   * ---------------------------------------------------------------------------
   * Plase add {attributes} option if you are using { raw: true }) option.
   * Reason : all default attributes are visible when using raw option
   * ---------------------------------------------------------------------------
   */
  const data = await UserModel.findAll({
    attributes: [
      'id',
      'name',
      'email',
      'email_verified_at',
      'level',
    ],
  }).catch(console.error);
  respAPI.respond(res, data);
};

// to-do: validation
exports.store = async (req, res) => {
  if (!req.body.name) {
    return respAPI.failForbidden(res, 'name field is required.');
  }
  if (!req.body.email) {
    return respAPI.failForbidden(res, 'email field is required.');
  }
  if (!req.body.password) {
    return respAPI.failForbidden(res, 'password field is required.');
  }
  if (!req.body.cpassword) {
    return respAPI.failForbidden(res, 'cpassword field is required.');
  }
  if (req.body.password !== req.body.cpassword) {
    return respAPI.failForbidden(res, 'The password confirm doesn\'t match.');
  }

  const saltRounds = 10;
  const myPlaintextPassword = req.body.password;
  const hashedPassword = await bcrypt.hash(myPlaintextPassword, saltRounds);

  const data = await UserModel.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    level: 1,
  });
  if (!data) {
    respAPI.fail(res, 'Unable to create a data.');
  } else {
    respAPI.respondCreated(res, data, 'Created a new user.');
  }
};

exports.show = async (req, res) => {
  const userId = req.params.userId;
  const user = await UserModel.findByPk(userId)
      .catch(console.error);
  if (!user) {
    respAPI.failNotFound(res);
  } else {
    respAPI.respond(res, user);
  }
};

// to-do: validation
exports.update = async (req, res) => {
  const userId = req.params.userId;
  const user = await UserModel.findByPk(userId)
      .catch(console.error);
  if (!user) {
    respAPI.failNotFound(res);
  } else {
    user.set({
      name: req.body.name || user.name,
      email: req.body.email || user.email,
      password: req.body.password || user.password, // to-do: bycript
      level: req.body.level || user.level,
    });

    const data = await user.save();
    if (!data) {
      respAPI.fail(res, 'Unable to update a data');
    } else {
      respAPI.respond(res, data, `Updated. ID: ${userId}`);
    }
  }
};

exports.destroy = async (req, res) => {
  const userId = req.params.userId;
  const user = await UserModel.findByPk(userId)
      .catch(console.error);
  if (!user) {
    respAPI.failNotFound(res);
  } else {
    const data = await user.destroy();
    if (!data) {
      respAPI.fail(res, 'Unable to delete a data');
    } else {
      respAPI.respond(res, data, `Deleted. ID: ${userId}`);
    }
  }
};
