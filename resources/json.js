const resourceJson = (data, message='OK', statusCode=200, status=1) => {
  let x = data;

  if (typeof data === 'object' && !data) {
    stringData = JSON.stringify(data, null, 2);
    x = JSON.stringify(stringData);
  }

  const result = {
    status: status ? true : false,
    code: statusCode,
  };

  if (message) result['message'] = message;
  result['data']= data ? x : null;

  return result;
};

module.exports = resourceJson;

