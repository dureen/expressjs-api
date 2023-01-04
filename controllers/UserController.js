// Status: not yet!
const rescJson = require('../resources/json');

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
  res.json(rescJson(users));
};

// not tested
// to-do: validation
exports.store = async (req, res) => {
  const name = req.body.name;
  if (!name) return res.json(rescJson(null, 'Failed.', 400, 0));
  const email = req.body.email;
  if (!email) return res.json(rescJson(null, 'Failed.', 400, 0));
  const password = req.body.password;
  const cpassword = req.body.confirmPassword;
  if (password !== cpassword) {
    return res.json(rescJson(null, 'Failed.', 400, 0));
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(myPlaintextPassword, saltRounds);

  const data = {
    name: name,
    email: email,
    password: hashedPassword,
    level: 1,
  };
  const user = UserModel.create(data);
  if (!user) {
    res.json(rescJson(null, 'Failed.', 400, 0));
  } else {
    res.json(rescJson(user));
  }
};

exports.show = async (req, res) => {
  const user = await UserModel.findByPk(req.params.userId);
  if (!user) {
    res.json(rescJson(null, 'Not found.', 404, 0));
  } else {
    res.json(rescJson(user));
  }
};

// not tested
// to-do: validation
exports.update = async (req, res) => {
  const user = await UserModel.findByPk(req.params.userId);
  if (!user) {
    return res.json(rescJson(null, 'The user cannot be found.', 404, 0));
  }
  if (req.body.name) user.name = req.body.name;
  if (req.body.email) user.email = req.body.email;
  // if (req.body.password) user.password = req.body.password;
  if (req.body.level) user.level = req.body.level;

  const updated = await product.save();
  if (!updated) {
    res.json(rescJson(null, 'Failed.', 400, 0));
  } else {
    res.json(rescJson(updated, 'Updated.', 200));
  }
};

exports.destroy = async (req, res) => {
  const userId = req.params.userId;
  const user = await UserModel.findByPk(userId);
  if (!user) {
    res.json(rescJson(null, 'Not found.', 404, 0));
  } else {
    const x = await user.destroy().catch(console.error);
    if (!x) {
      const msg = 'Unable to delete user #' + userId;
      res.json(rescJson(null, msg, 500, 0));
    } else {
      const msg = 'Successfully deleted user #' + userId;
      res.json(rescJson(null, msg));
    }
  }
};
