/* eslint-disable max-len */
// Reference: https://codeigniter4.github.io/userguide/outgoing/api_responses.html

exports.respond = (res, data, message, statusCode=200) => {
  const obj = {
    code: statusCode,
  };
  if (data) obj['data'] = data;
  if (message) obj['message'] = message;
  res.status(statusCode).json(obj);
};

exports.fail = (res, messages, code=null, message = '') => {
  const obj ={
    code: code || 400,
    messages: message ? `${message},\n ${messages}` : messages,
  };
  res.status(400).json(obj);
};

exports.respondCreated = (res, data=null, message='') => {
  const obj = {
    code: 201,
    message: message || 'Created.',
  };
  if (data) obj['data'] = data;
  res.status(201).json(obj);
};

exports.respondDeleted = (res, data=null, message='') => {
  const obj = {
    code: 200,
    message: message || 'Deleted.',
  };
  if (data) obj['data'] = data;
  res.status(200).json(obj);
};

exports.respondNoContent = (res, message='No Content') => {
  res.status(200).json({message: message});
};

exports.failUnauthorized = (res, description='Unauthorized', code=null, message='') => {
  const obj = {
    code: code || 401,
    errors: {
      description: description,
    },
  };
  if (message) obj['errors']['message'] = message;
  res.status(401).json(obj);
};

exports.failForbidden = (res, description='Forbidden.', code=null, message='') => {
  const obj = {
    code: code || 403,
    errors: {
      description: description,
    },
  };
  if (message) obj['errors']['message'] = message;
  res.status(403).json(obj);
};

exports.failNotFound = (res, description='Not found.', code=null, message='') => {
  const obj = {
    code: code || 404,
    errors: {
      description: description,
    },
  };
  if (message) obj['errors']['message'] = message;
  res.status(404).json(obj);
};

exports.failValidationError = (res, errors, code=null, message='') => {
  const obj = {
    code: code || 400,
    errors: errors,
  };
  if (message) obj['message'] = message;
  res.status(400).json(obj);
};

exports.failResourceExists = (res, description='The resource already exists.', code = null, message = '') => {
  const obj = {
    code: code || 409,
    description: description,
  };
  if (message) obj['message'] = message;
  res.status(409).json(obj);
};

exports.failResourceGone = (res, description='The resource already gone.', code = null, message = '') => {
  const obj = {
    code: code || 410,
    description: description,
  };
  if (message) obj['message'] = message;
  res.status(410).json(obj);
};

exports.failTooManyRequests = (res, description='Too Many Requests', code = null, message = '') => {
  const obj = {
    code: code || 400,
    description: description,
  };
  if (message) obj['message'] = message;
  res.status(400).json(obj);
};

exports.failServerError = (res, description = 'Internal Server Error', code = null, message = '') => {
  const obj = {
    code: code,
    description: description,
  };
  if (message) obj['message'] = message;
  res.status(code).json(obj);
};
