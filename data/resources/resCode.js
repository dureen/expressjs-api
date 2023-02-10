exports.set200 = (res, result, message='OK.') => {
  const data = {
    status: 1,
    code: 200,
    message: message,
  };
  if (result) data['data'] = result;
  res.status(200).json(data);
};

exports.set201 = (res, result, message='Created a new data.') => {
  const data = {
    status: 1,
    code: 201,
    message: message,
  };
  if (result) data['data'] = result;
  res.status(200).json(data);
};

exports.set404 = (res, message='Data not found.') => {
  res.status(404).json({
    status: 0,
    code: 404,
    message: message,
  });
};

exports.set403 = (res, message='name field is required.') => {
  res.status(403).json({
    status: 0,
    code: 403,
    message: message,
  });
};

exports.set422 = (res, message='Unprocessable Entity.') => {
  res.status(422).json({
    status: 0,
    code: 422,
    message: message,
  });
};
