const resourceJson = (data, message='OK', statusCode=200, status=1) => {
  const result = {
    status: status ? true : false,
    code: statusCode,
  };
  if (message) result['message'] = message;
  result['data'] = (typeof data === 'object' && !data) ?
    JSON.parse(JSON.stringify(data, null, 2)) :
    data;
  return result;
};

module.exports = resourceJson;

