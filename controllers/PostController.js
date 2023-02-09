const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');

exports.index = async (req, res) => {
  const data = await PostModel.findAll({
    include: [{
      model: UserModel,
      attributes: ['name']},
    ],
  }).catch(console.error);
  res.json({
    status: 1,
    code: 200,
    message: 'OK.',
    data: data,
  });
};

//  to-do: form validation + slug string
exports.store = async (req, res) => {
  // res.send('/POST');
  if (!req.body.userId) {
    return res.status(403).json({
      status: 0,
      code: 403,
      message: 'userId field is required.',
    });
  }
  if (!req.body.title) {
    return res.status(403).json({
      status: 0,
      code: 403,
      message: 'title field is required.',
    });
  }
  if (!req.body.content) {
    return res.status(403).json({
      status: 0,
      code: 403,
      message: 'content field is required.',
    });
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
    res.status(422).json({
      status: 0,
      code: 422,
      message: 'Unprocessable Entity.',
    });
  } else {
    res.status(201).json({
      status: 1,
      code: 201,
      message: 'Created a new data.',
      data: result,
    });
  }
};

exports.show = async (req, res) => {
  const postId = req.params.postId;
  const data = await PostModel.findByPk(postId)
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

// to-do: form validation
exports.update = async (req, res) => {
  const postId = req.params.postId;
  const data = await PostModel.findByPk(postId)
      .catch(console.error);
  if (!data) {
    res.status(404).json({
      status: 0,
      code: 404,
      message: 'Data not found.',
    });
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
      res.status(422).json({
        status: 0,
        code: 422,
        message: 'Unprocessable Entity.',
      });
    } else {
      res.json({
        status: 1,
        code: 200,
        message: `Updated. ID: ${postId}`,
        data: result,
      });
    }
  }
};

exports.destroy = async (req, res) => {
  const postId = req.params.postId;
  const data = await PostModel.findByPk(postId)
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
        message: `Deleted. ID: ${postId}`,
      });
    }
  }
};
