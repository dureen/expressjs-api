const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');
const resCode = require('../data/resources/resCode');

exports.index = async (req, res) => {
  const result = await PostModel.findAll({
    include: [{
      model: UserModel,
      attributes: ['name']},
    ],
  }).catch(console.error);
  resCode.set200(res, result);
};

//  to-do: form validation + slug string
exports.store = async (req, res) => {
  // res.send('/POST');
  if (!req.body.userId) {
    return resCode.set403(res, 'userId field is required.');
  }
  if (!req.body.title) {
    return resCode.set403(res, 'title field is required.');
  }
  if (!req.body.content) {
    return resCode.set403(res, 'content field is required.');
  }

  const data = {
    userId: req.body.userId,
    title: req.body.title,
    slug: req.body.title,
    content: req.body.content,
    status: req.body.status || 0,
  };

  const result = await PostModel.create(data);
  if (!result) {
    resCode.set422(res);
  } else {
    resCode.set201(res, result);
  }
};

exports.show = async (req, res) => {
  const postId = req.params.postId;
  const result = await PostModel.findByPk(postId)
      .catch(console.error);
  if (!result) {
    resCode.set404(res);
  } else {
    resCode.set200(res, result);
  }
};

// to-do: form validation
exports.update = async (req, res) => {
  const postId = req.params.postId;
  const data = await PostModel.findByPk(postId)
      .catch(console.error);
  if (!data) {
    resCode.set404(res);
  } else {
    data.set({
      userId: req.body.userId || data.userId,
      title: req.body.title || data.title,
      // slug: req.body.title || post.slug, // should unique
      content: req.body.content || data.content,
      status: req.body.status || data.status,
    });

    const result = await data.save();
    if (!result) {
      resCode.set422(res);
    } else {
      resCode.set200(res, result, `Updated. ID: ${postId}`);
    }
  }
};

exports.destroy = async (req, res) => {
  const postId = req.params.postId;
  const data = await PostModel.findByPk(postId)
      .catch(console.error);
  if (!data) {
    resCode.set404(res);
  } else {
    const result = await data.destroy();
    if (!result) {
      resCode.set422(res);
    } else {
      resCode.set200(res, result, `Deleted. ID: ${postId}`);
    }
  }
};
