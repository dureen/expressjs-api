exports.index = (req, res) => {
  res.send('/GET index of books');
};

exports.store = (req, res) => {
  res.send('/POST book data');
};

exports.show = (req, res) => {
  res.send('/GET book id: ' + req.params.bookId);
};

exports.update = (req, res) => {
  res.send('/PUT book id: ' + req.params.bookId);
};

exports.destroy = (req, res) => {
  res.send('/DELETE book id: ' + req.params.bookId);
};
