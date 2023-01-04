const resJson = require('../resources/json');

const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');

exports.index = async (req, res) => {
  const posts = await PostModel.findAll({
    include: [{
      model: UserModel,
      attributes: ['name']},
    ],
  });
  res.json(resJson(posts));
};

exports.store = async (req, res) => {
  // res.send('/POST');
  console.log('something');
  // res.json(resJson(posts, 'Created.', 201));
};

exports.show = async (req, res) => {
  console.log(req.params.postId);
  const post = await PostModel.findByPk(req.params.postId);
  if (!post) {
    res.json(resJson(null, 'Not found.', 404, 0));
  } else {
    res.json(resJson(post));
  }
};

exports.update = async (req, res) => {
  const post = await PostModel.findByPk(req.params.postId);
  res.json(resJson(post));
};

exports.destroy = async (req, res) => {
  const postId = req.params.postId;
  const post = await PostModel.findByPk(postId);
  if (!post) {
    res.json(resJson(null, 'Not found.', 404, 0));
  } else {
    const x = await post.destroy().catch(console.error);
    if (!x) {
      const msg = 'Unable to delete post #' + postId;
      res.json(resJson(null, msg, 500, 0));
    } else {
      const msg = 'Successfully deleted post #' + postId;
      res.json(resJson(null, msg));
    }
  }
};
