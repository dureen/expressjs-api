const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');

exports.index = async (req, res) => {
  const posts = await PostModel.findAll({
    include: [{
      model: UserModel,
      attributes: ['name']},
    ],
  }).catch(console.error);
  const jsonString = JSON.stringify(posts, null, 2);
  res.json(JSON.parse(jsonString));
};

exports.store = async (req, res) => {
  res.send('/POST post data');
};

exports.show = async (req, res) => {
  // res.send('/GET post id: ' + req.params.postId);
  const post = await PostModel.findByPk(req.params.postId).catch(console.error);
  const jsonString = JSON.stringify(post, null, 2);
  res.json(JSON.parse(jsonString));
};

exports.update = async (req, res) => {
  res.send('/PUT post id: ' + req.params.postId);
};

exports.destroy = async (req, res) => {
  res.send('/DELETE post id: ' + req.params.postId);
};
