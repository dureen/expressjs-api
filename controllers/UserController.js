// Status: not yet!
const rJson = require('../resources/json');

const UserModel = require('../models/UserModel');

const bcrypt = require('bcrypt');

exports.index = async (req, res) => {
  /**
   * ---------------------------------------------------------------------------
   * PLEASE AVOID USING model ({ raw: true })
   * Reason : can make hidden attribute to appear
   * ---------------------------------------------------------------------------
   */
  const users = await UserModel.findAll();
  res.json(rJson(users, 'OK'));
};

// to-do: validation
exports.store = async (req, res) => {
  if (!req.body.name) {
    return res.status(403).
        json(rJson(null, '`name field is required', 403, 0));
  }
  if (!req.body.email) {
    return res.status(403).
        json(rJson(null, '`email field is required', 403, 0));
  }
  if (!req.body.password) {
    return res.status(403).
        json(rJson(null, '`password` field is required', 403, 0));
  }
  if (!req.body.cpassword) {
    return res.status(403).
        json(rJson(null, '`cpassword field is required', 403, 0));
  }
  if (req.body.password !== req.body.cpassword) {
    return res.status(403).
        json(rJson(null, 'the password doen\'t match', 403, 0));
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

  const user = await UserModel.create(data).catch(console.error);
  if (!user) {
    res.status(422).json(rJson(null, 'Unprocessable Entity.', 422, 0));
  } else {
    res.status(201).json(rJson(user, 'Created.', 201));
  }
};

exports.show = async (req, res) => {
  const user = await UserModel.findByPk(req.params.userId);
  if (!user) {
    res.status(404).json(rJson(null, 'Not found.', 404, 0));
  } else {
    res.json(rJson(user, 'OK'));
  }
};

// to-do: validation
exports.update = async (req, res) => {
  const user = await UserModel.findByPk(req.params.userId);
  if (!user) {
    res.status(404).json(rJson(null, 'Not found.', 404, 0));
  } else {
    user.set({
      name: req.body.name || user.name,
      email: req.body.email || user.email,
      password: req.body.password || user.password, // to-do: bycript
      level: req.body.level || user.level,
    });
    const updated = await user.save().catch(console.error);
    if (!updated) {
      res.status(422).json(rJson(null, 'Unprocessable Entity.', 422, 0));
    } else {
      res.json(rJson(updated, 'Updated.'));
    }
  }
};

exports.destroy = async (req, res) => {
  const userId = req.params.userId;
  const user = await UserModel.findByPk(userId);
  if (!user) {
    res.json(rJson(null, 'Not found.', 404, 0));
  } else {
    const x = await user.destroy().catch(console.error);
    if (!x) {
      res.status(422).json(rJson(null, 'Unprocessable Entity.', 422, 0));
    } else {
      res.json(rJson(null, 'Deleted.'));
    }
  }
};
