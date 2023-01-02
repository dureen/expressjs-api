exports.index = (req, res) => {
  res.send('/GET index of posts');
};

exports.store = (req, res) => {
  res.send('/POST post data');
};

exports.show = (req, res) => {
  res.send('/GET post id: ' + req.params.postId);
};

exports.update = (req, res) => {
  res.send('/PUT post id: ' + req.params.postId);
};

exports.destroy = (req, res) => {
  res.send('/DELETE post id: ' + req.params.postId);
};
