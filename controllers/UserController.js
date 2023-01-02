exports.index = (req, res) => {
  res.send('/GET index of users');
};

exports.store = (req, res) => {
  res.send('/POST user data');
};

exports.show = (req, res) => {
  res.send('/GET user id: ' + req.params.userId);
};

exports.update = (req, res) => {
  res.send('/PUT user id: ' + req.params.userId);
};

exports.destroy = (req, res) => {
  res.send('/DELETE user id: ' + req.params.userId);
};
