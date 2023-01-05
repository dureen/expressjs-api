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
  const data = {
    name: req.body.name || '',
    email: req.body.email || '',
    content: req.body.content || '',
  };
  const feedback = FeedbackModel.create(data).catch(console.error);
  if (!feedback) {
    res.json(rescJson(null, 'Failed.', 400, 0));
  } else {
    res.json(rescJson(feedback));
  }
};

exports.show = async (req, res) => {
  const feedback = await FeedbackModel.findByPk(req.params.feedbackId);
  if (!feedback) {
    res.json(rescJson(null, 'Not found.', 404, 0));
  } else {
    res.json(rescJson(feedback));
  }
};


exports.destroy = async (req, res) => {
  const feedbackId = req.params.feedbackId;
  const feedback = await FeedbackModel.findByPk(feedbackId);
  if (!feedback) {
    res.json(rescJson(null, 'Not found.', 404, 0));
  } else {
    const x = await feedback.destroy().catch(console.error);
    if (!x) {
      res.json(rescJson(null, 'Failed.', 500, 0));
    } else {
      res.json(rescJson(null, 'Deleted.'));
    }
  }
};
