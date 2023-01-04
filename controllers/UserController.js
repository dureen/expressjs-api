const resJson = require('../resources/json');

const UserModel = require('../models/UserModel');

exports.index = async (req, res) => {
  /**
   * ---------------------------------------------------------------------------
   * PLEASE AVOID USING model ({ raw: true })
   * Reason : can cause hidden attribute to appear
   * ---------------------------------------------------------------------------
   */
  const users = await UserModel.findAll();
  res.json(resJson(users));
};

exports.store = async (req, res) => {
  res.send('/POST user data');
};

exports.show = async (req, res) => {
  const user = await UserModel.findByPk(req.params.userId);
  if (!user) {
    res.json(resJson(null, 'Not found.', 404, 0));
  } else {
    res.json(resJson(user));
  }
};

exports.update = async (req, res) => {
  const data = await UserModel.findByPk(req.params.userId);
  // res.send('/PUT user id: ' + req.params.userId);
  res.json(resJson(data));
};

exports.destroy = async (req, res) => {
  const userId = req.params.userId;
  const user = await UserModel.findByPk(userId);
  if (!user) {
    res.json(resJson(null, 'Not found.', 404, 0));
  } else {
    const x = await user.destroy().catch(console.error);
    if (!x) {
      const msg = 'Unable to delete user #' + userId;
      res.json(resJson(null, msg, 500, 0));
    } else {
      const msg = 'Successfully deleted user #' + userId;
      res.json(resJson(null, msg));
    }
  }
};
