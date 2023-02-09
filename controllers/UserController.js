const UserModel = require('../models/UserModel');

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
  res.json({
    status: 1,
    code: 200,
    message: 'OK.',
    data: data,
  });
};

// to-do: validation
exports.store = async (req, res) => {
  if (!req.body.name) {
    return res.status(403).json({
      status: 0,
      code: 403,
      message: 'name field is required.',
    });
  }
  if (!req.body.email) {
    return res.status(403).json({
      status: 0,
      code: 403,
      message: 'email field is required.',
    });
  }
  if (!req.body.password) {
    return res.status(403).json({
      status: 0,
      code: 403,
      message: 'password field is required.',
    });
  }
  if (!req.body.cpassword) {
    return res.status(403).json({
      status: 0,
      code: 403,
      message: 'cpassword field is required.',
    });
  }
  if (req.body.password !== req.body.cpassword) {
    return res.status(403).json({
      status: 0,
      code: 403,
      message: 'The password confirm doesn\'t match.',
    });
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
    res.status(422).json({
      status: 0,
      code: 422,
      message: 'Unprocessable Entity.',
    });
  } else {
    res.status(201).json({
      status: 1,
      code: 201,
      message: 'Created a new user.',
      data: result,
    });
  }
};

exports.show = async (req, res) => {
  const userId = req.params.userId;
  const data = await UserModel.findByPk(userId)
      .catch(console.error);
  if (!data) {
    res.status(404).json({
      status: 0,
      code: 404,
      message: 'Data not found.',
    });
  } else {
    res.json({
      status: 1,
      code: 200,
      message: 'OK.',
      data: data,
    });
  }
};

// to-do: validation
exports.update = async (req, res) => {
  const userId = req.params.userId;
  const data = await UserModel.findByPk(userId)
      .catch(console.error);
  if (!data) {
    res.status(404).json({
      status: 0,
      code: 404,
      message: 'Data not found.',
    });
  } else {
    data.set({
      name: req.body.name || data.name,
      email: req.body.email || data.email,
      password: req.body.password || data.password, // to-do: bycript
      level: req.body.level || data.level,
    });

    const result = await data.save();
    if (!result) {
      res.status(422).json({
        status: 0,
        code: 422,
        message: 'Unprocessable Entity.',
      });
    } else {
      res.json({
        status: 1,
        code: 200,
        message: `Updated. ID: ${userId}`,
        data: result,
      });
    }
  }
};

exports.destroy = async (req, res) => {
  const userId = req.params.userId;
  const data = await UserModel.findByPk(userId)
      .catch(console.error);
  if (!data) {
    res.status(404).json({
      status: 0,
      code: 404,
      message: 'Data not found.',
    });
  } else {
    const result = await data.destroy();
    if (!result) {
      res.status(422).json({
        status: 0,
        code: 422,
        message: 'Unprocessable Entity.',
      });
    } else {
      res.json({
        status: 1,
        code: 200,
        message: `Deleted. ID: ${userId}`,
      });
    }
  }
};
