exports.camelCaseKey = (key) => {
  let keyLower = key.toLowerCase();

  switch (keyLower) {
    case 'talktime':
      return 'talkTime';
    case 'numofchats':
      return 'numOfChats';
    case 'teacherpoints':
      return 'teacherPoints';
    default:
      return key;
  }
};

exports.isValidQuery = (queries) => {
  const validQueries = {
    teacherpoints: true,
    numofchats: true,
    talktime: true
  };

  return queries.every((key) => {
    key = key.toLowerCase();
    
    return validQueries[key];
  });
};

exports.normaliseDataById = (array) => {
  return array.reduce((res, elem) => {
    res[elem._id] = elem;
    return res;
  }, {});
};