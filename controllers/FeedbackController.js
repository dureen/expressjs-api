// to-do: create router for this one
// Status: not yet!
const rescJson = require('../resources/json');

const FeedbackModel = require('../models/FeedbackModel');

exports.index = async (req, res) => {
  const feedbacks = await FeedbackModel.findAll();
  res.json(rescJson(feedbacks));
};

// not tested
// to-do: validation
exports.store = async (req, res) => {
  if (!req.body.name) {
    return res.status(403).
        json(rescJson(null, '`name` field is required', 403, 0));
  }
  if (!req.body.email) {
    return res.status(403).
        json(rescJson(null, '`email` field is required', 403, 0));
  }
  if (!req.body.content) {
    return res.status(403).
        json(rescJson(null, '`content` field is required', 403, 0));
  }

  const data = {
    name: req.body.name,
    email: req.body.email,
    content: req.body.content,
  };

  const feedback = await FeedbackModel.create(data).catch(console.error);
  if (!feedback) {
    res.status(422).json(rescJson(null, 'Unprocessable Entity.', 422, 0));
  } else {
    res.status(201).json(rescJson(feedback, 'Created.', 201));
  }
};

exports.show = async (req, res) => {
  const feedback = await FeedbackModel.findByPk(req.params.feedbackId);
  if (!feedback) {
    res.status(404).json(rescJson(null, 'Not found.', 404, 0));
  } else {
    res.json(rescJson(feedback));
  }
};


exports.destroy = async (req, res) => {
  const feedbackId = req.params.feedbackId;
  const feedback = await FeedbackModel.findByPk(feedbackId);
  if (!feedback) {
    res.status(404).json(rescJson(null, 'Not found.', 404, 0));
  } else {
    const x = await feedback.destroy().catch(console.error);
    if (!x) {
      res.status(422).json(rescJson(null, 'Unprocessable Entity.', 422, 0));
    } else {
      res.json(rescJson(null, 'Deleted.'));
    }
  }
};
