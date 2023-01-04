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

// not tested
// to-do: validation
exports.store = async (req, res) => {
  // res.send('/POST');
  const data = {
    userId: req.body.userId || '',
    title: req.body.title || '',
    slug: req.body.title || '',
    content: req.body.content || '',
    status: req.body.status || '',
  };
  const post = await ProductModel.create(data);
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

// not tested
// to-do: validation
exports.update = async (req, res) => {
  const post = await PostModel.findByPk(req.params.postId);
  if (!post) {
    return res.json(rescJson(null, 'The post cannot be found.', 404, 0));
  }

  if (req.body.userId) post.userId = req.body.userId;
  if (req.body.title) post.title = req.body.title;
  if (req.body.title) post.slug = req.body.title;
  if (req.body.content) post.content = req.body.content;
  if (req.body.status) post.status = req.body.status;

  const updated = await post.save();
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
      const msg = 'Unable to delete post #' + postId;
      res.json(rescJson(null, msg, 500, 0));
    } else {
      const msg = 'Successfully deleted post #' + postId;
      res.json(rescJson(null, msg));
    }
  }
};
