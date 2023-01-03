const resourceJson = require('../resources/json');

const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');

exports.index = async (req, res) => {
  const data = await PostModel.findAll({
    include: [{
      model: UserModel,
      attributes: ['name']},
    ],
  });
  res.json(resourceJson(data));
};

exports.store = async (req, res) => {
  res.send('/POST');
};

exports.show = async (req, res) => {
  const data = await PostModel.findByPk(req.params.postId);
  res.json(resourceJson(data, null));
};

exports.update = async (req, res) => {
  const data = await PostModel.findByPk(req.params.postId);
  res.json(resourceJson(data));
};

exports.destroy = async (req, res) => {
  const data = await PostModel.findByPk(req.params.postId);
  res.json(resourceJson(data));
};
