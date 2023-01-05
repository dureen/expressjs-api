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

//  to-do: validation and slug string
exports.store = async (req, res) => {
  // res.send('/POST');
  if (!req.body.userId) {
    return res.json(rescJson(null, '`userId` field is required!', 403, 0));
  }
  if (!req.body.title) {
    return res.json(rescJson(null, '`title` field is required!', 403, 0));
  }
  if (!req.body.content) {
    return res.json(rescJson(null, '`content` field is required!', 403, 0));
  }

  const data = {
    userId: req.body.userId,
    title: req.body.title,
    slug: req.body.title,
    content: req.body.content,
    status: req.body.status || 0,
  };

  const post = await PostModel.create(data).catch(console.error);
  if (!post) {
    res.json(rescJson(null, 'Unprocessable Entity.', 422, 0));
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
    res.json(rescJson(null, 'Not found.', 404, 0));
  } else {
    post.set({
      userId: req.body.userId || post.userId,
      title: req.body.title || post.title,
      // slug: req.body.title || post.slug, // should unique
      content: req.body.content || post.content,
      status: req.body.status || post.status,
    });

    const updated = await post.save().catch(console.error);
    if (!updated) {
      res.json(rescJson(null, 'Unprocessable Entity.', 422, 0));
    } else {
      res.json(rescJson(updated, 'Updated.', 200));
    }
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
      res.json(rescJson(null, 'Unprocessable Entity.', 422, 0));
    } else {
      res.json(rescJson(null, 'Deleted.'));
    }
  }
};
