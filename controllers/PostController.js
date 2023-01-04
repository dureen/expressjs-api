// Status: not yet!
const rescJson = require('../resources/json');

const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');

exports.index = async (req, res) => {
  const posts = await PostModel.findAll({
    include: [{
      model: UserModel,
      attributes: ['name']},
    ],
  });
  res.json(rescJson(posts));
};

exports.store = async (req, res) => {
  res.send('/POST');
};

exports.show = async (req, res) => {
  console.log(req.params.postId);
  const post = await PostModel.findByPk(req.params.postId);
  if (!post) {
    res.json(rescJson(null, 'Not found.', 404, 0));
  } else {
    res.json(rescJson(post));
  }
};

exports.update = async (req, res) => {
  const post = await PostModel.findByPk(req.params.postId);
  res.json(rescJson(post));
};

exports.destroy = async (req, res) => {
  const postId = req.params.postId;
  const post = await PostModel.findByPk(postId);
  if (!post) {
    res.json(rescJson(null, 'Not found.', 404, 0));
  } else {
    const x = await post.destroy().catch(console.error);
    if (!x) {
      const msg = 'Unable to delete post #' + postId;
      res.json(rescJson(null, msg, 500, 0));
    } else {
      const msg = 'Successfully deleted post #' + postId;
      res.json(rescJson(null, msg));
    }
  }
};
