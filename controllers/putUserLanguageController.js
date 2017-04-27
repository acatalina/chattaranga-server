const async = require('async');

const Users = require('../models/Users');
const UserLanguages = require('../models/UserLanguages');
const Languages = require('../models/Languages');
const {
  camelCaseKey, 
  isValidQuery, 
  normaliseDataById
} = require('../lib/helpers');


function getUserLanguageIds(username, language, next) {
  Users.find({username: username}, (err, user) => {
    if (err) return next(err);
    if (!user.length) return next({name: 'CastError'});

    return next(null, user[0].userLanguages, language);
  });
}

function getLanguages(userLanguages, language, next) {
  Languages.find({name: language}, (err, language) => {
    return err ? next(err) : next(null, userLanguages, language[0]._id);
  });
}

function findUserLanguage(userLanguages, languageId, done) {
  UserLanguages.find({language: languageId}, (err, allUserLanguagesByLanguage) => {
    if (err) return done(err);

    allUserLanguagesByLanguage = normaliseDataById(allUserLanguagesByLanguage);

    let thisUserLanguage = userLanguages.find(userLanguagesId => {
      return allUserLanguagesByLanguage[userLanguagesId];
    });
    
    done(null, thisUserLanguage);
  });
}

function modifyUserLanguage(req, res, next) {
  let {query} = req; 
  let queries = Object.keys(req.query);

  if (!isValidQuery(queries)) return next({name: 'QUERY'});

  async.waterfall([
      getUserLanguageIds.bind(null, req.params.username, req.params.language),
      getLanguages,
      findUserLanguage
  ], (err, userLanguageId) => {
    query = queries.reduce((res, key) => {
      res['$inc'][camelCaseKey(key)] = query[key];
      return res;
    }, {$inc: {}});

    UserLanguages.findByIdAndUpdate(
      {_id: userLanguageId}, 
      query, 
      {new: true},
      (err) => {
      return err ? next(err) : res.status(204).send();
    });
  });
}

module.exports = modifyUserLanguage;