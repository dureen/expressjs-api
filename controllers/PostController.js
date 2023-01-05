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

// Next to-do: validation
exports.store = async (req, res) => {
  // res.send('/POST');
  if (!req.body.userId) {
    return res.json(rescJson(null, 'User Id field is required!', 403, 0));
  }
  if (!req.body.title) {
    return res.json(rescJson(null, 'Title field is required!', 403, 0));
  }
  if (!req.body.content) {
    return res.json(rescJson(null, 'Content field is required!', 403, 0));
  }
  const data = {
    userId: req.body.userId || '',
    title: req.body.title || '',
    slug: req.body.title || '',
    content: req.body.content || '',
    status: req.body.status || 0,
  };
  const post = await PostModel.create(data).catch(console.error);
  if (!post) {
    res.json(rescJson(null, 'Failed.', 400, 0));
  } else {
    res.json(rescJson(post, 'Created.', 201));
  }
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

// Next to-do: validation
exports.update = async (req, res) => {
  const post = await PostModel.findByPk(req.params.postId);
  if (!post) {
    return res.json(rescJson(null, 'The post is not found.', 404, 0));
  }

  if (req.body.userId) post.userId = req.body.userId;
  if (req.body.title) post.title = req.body.title;
  // if (req.body.title) post.slug = req.body.title; // should unique
  if (req.body.content) post.content = req.body.content;
  if (req.body.status) post.status = req.body.status;

  const updated = await post.save().catch(console.error);
  if (!updated) {
    res.json(rescJson(null, 'Failed.', 400, 0));
  } else {
    res.json(rescJson(updated, 'Updated.', 200));
  }
};

exports.destroy = async (req, res) => {
  const postId = req.params.postId;
  const post = await PostModel.findByPk(postId);
  if (!post) {
    res.json(rescJson(null, 'Not found.', 404, 0));
  } else {
    const x = await post.destroy().catch(console.error);
    if (!x) {
      res.json(rescJson(null, 'Failed.', 500, 0));
    } else {
      res.json(rescJson(null, 'Deleted.'));
    }
  }
};
