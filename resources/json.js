const resourceJson = (data, message, statusCode=200, status=1) => {
  const result = {
    status: status ? true : false,
    code: statusCode,
  };
  result['message'] = message || 'no messsage';
  if (data) {
    result['data'] = (typeof data === 'object' && !data) ?
    JSON.parse(JSON.stringify(data, null, 2)) :
    data;
  }
  return result;
};

module.exports = resourceJson;

