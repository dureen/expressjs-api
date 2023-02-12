// to-do: form validation

const FeedbackModel = require('../models/FeedbackModel');
const respAPI = require('../resources/api/response');

exports.index = async (req, res) => {
  const data = await FeedbackModel.findAll()
      .catch(console.error);
  respAPI.respond(res, data);
};

exports.store = async (req, res) => {
  if (!req.body.name) {
    return respAPI.failForbidden(res, 'name field is required.');
  }
  if (!req.body.email) {
    return respAPI.failForbidden(res, 'email field is required.');
  }
  if (!req.body.content) {
    return respAPI.failForbidden(res, 'content field is required.');
  }

  const data = await FeedbackModel.create({
    name: req.body.name,
    email: req.body.email,
    content: req.body.content,
  }).catch(console.error);
  if (!data) {
    respAPI.fail(res, 'Unable to create a data.');
  } else {
    respAPI.respondCreated(res, data);
  }
};

exports.show = async (req, res) => {
  const fbId = req.params.feedbackId;
  const feedback = await FeedbackModel.findByPk(fbId)
      .catch(console.error);
  if (!feedback) {
    respAPI.failNotFound(res);
  } else {
    respAPI.respond(res, feedback);
  }
};


exports.destroy = async (req, res) => {
  const fbId = req.params.feedbackId;
  const feedback = await FeedbackModel.findByPk(fbId)
      .catch(console.error);
  if (!feedback) {
    respAPI.failNotFound(res);
  } else {
    const data = await feedback.destroy();
    if (!data) {
      respAPI.fail(res, 'Unable to delete a data');
    } else {
      respAPI.respond(res, data, `Deleted. ID: ${fbId}`);
    }
  }
};
