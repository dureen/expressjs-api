// to-do: form validation

const FeedbackModel = require('../models/FeedbackModel');

exports.index = async (req, res) => {
  const data = await FeedbackModel.findAll()
      .catch(console.error);
  res.json({
    status: 1,
    code: 200,
    message: 'OK.',
    data: data,
  });
};

exports.store = async (req, res) => {
  if (!req.body.name) {
    return res.status(403).json({
      status: 0,
      code: 403,
      message: 'name field is required.',
    });
  }
  if (!req.body.email) {
    return res.status(403).json({
      status: 0,
      code: 403,
      message: 'email field is required.',
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
    name: req.body.name,
    email: req.body.email,
    content: req.body.content,
  };

  const result = await FeedbackModel.create(data)
      .catch(console.error);
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
  const fbId = req.params.feedbackId;
  const data = await FeedbackModel.findByPk(fbId)
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


exports.destroy = async (req, res) => {
  const fbId = req.params.feedbackId;
  const data = await FeedbackModel.findByPk(fbId)
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
        message: `Deleted. ID: ${fbId}`,
      });
    }
  }
};
