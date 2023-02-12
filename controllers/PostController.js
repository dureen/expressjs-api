const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');
const respAPI = require('../data/resources/respAPI');

exports.index = async (req, res) => {
  const data = await PostModel.findAll({
    include: [{
      model: UserModel,
      attributes: ['name']},
    ],
  }).catch(console.error);
  respAPI.respond(res, data);
};

//  to-do: form validation + slug string
exports.store = async (req, res) => {
  // res.send('/POST');
  if (!req.body.userId) {
    return respAPI.failForbidden(res, 'userId field is required.');
  }
  if (!req.body.title) {
    return respAPI.failForbidden(res, 'title field is required.');
  }
  if (!req.body.content) {
    return respAPI.failForbidden(res, 'content field is required.');
  }

  const data = await PostModel.create({
    userId: req.body.userId,
    title: req.body.title,
    slug: req.body.title,
    content: req.body.content,
    status: req.body.status || 0,
  });
  if (!data) {
    respAPI.fail(res, 'Unable to create a data.');
  } else {
    respAPI.respondCreated(res, data);
  }
};

exports.show = async (req, res) => {
  const postId = req.params.postId;
  const post = await PostModel.findByPk(postId)
      .catch(console.error);
  if (!post) {
    respAPI.failNotFound(res);
  } else {
    respAPI.respond(res, post);
  }
};

// to-do: form validation
exports.update = async (req, res) => {
  const postId = req.params.postId;
  const post = await PostModel.findByPk(postId)
      .catch(console.error);
  if (!post) {
    respAPI.failNotFound(res);
  } else {
    post.set({
      userId: req.body.userId || post.userId,
      title: req.body.title || post.title,
      // slug: req.body.title || post.slug, // should unique
      content: req.body.content || post.content,
      status: req.body.status || post.status,
    });

    const data = await post.save();
    if (!data) {
      respAPI.fail(res, 'Unable to update a data');
    } else {
      respAPI.respond(res, data, `Updated. ID: ${postId}`);
    }
  }
};

exports.destroy = async (req, res) => {
  const postId = req.params.postId;
  const post = await PostModel.findByPk(postId)
      .catch(console.error);
  if (!post) {
    respAPI.failNotFound(res);
  } else {
    const data = await post.destroy();
    if (!data) {
      respAPI.fail(res, 'Unable to delete a data');
    } else {
      respAPI.respond(res, data, `Deleted. ID: ${postId}`);
    }
  }
};
