// to-do: form validation

const FeedbackModel = require('../models/FeedbackModel');
const resCode = require('../data/resources/resCode');

exports.index = async (req, res) => {
  const result = await FeedbackModel.findAll()
      .catch(console.error);
  resCode.set200(res, result);
};

exports.store = async (req, res) => {
  if (!req.body.name) {
    return resCode.set403(res, 'name field is required.');
  }
  if (!req.body.email) {
    return resCode.set403(res, 'email field is required.');
  }
  if (!req.body.content) {
    return resCode.set403(res, 'content field is required.');
  }

  const data = {
    name: req.body.name,
    email: req.body.email,
    content: req.body.content,
  };

  const result = await FeedbackModel.create(data)
      .catch(console.error);
  if (!result) {
    resCode.set422(res);
  } else {
    resCode.set201(res, result);
  }
};

exports.show = async (req, res) => {
  const fbId = req.params.feedbackId;
  const result = await FeedbackModel.findByPk(fbId)
      .catch(console.error);
  if (!result) {
    resCode.set404(res);
  } else {
    resCode.set200(res, result);
  }
};


exports.destroy = async (req, res) => {
  const fbId = req.params.feedbackId;
  const data = await FeedbackModel.findByPk(fbId)
      .catch(console.error);
  if (!data) {
    resCode.set404(res);
  } else {
    const result = await data.destroy();
    if (!result) {
      resCode.set422(res);
    } else {
      resCode.set200(res, result, `Deleted. ID: ${fbId}`);
    }
  }
};
