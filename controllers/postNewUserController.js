const Users = require('../models/Users');
const UserLanguages = require('../models/UserLanguages');
const Languages = require('../models/Languages');
const Levels = require('../models/Levels');
const async = require('async');

function getLanguages (done) {
  Languages.find({}, (err, languages) => {
    return err ? done(err) : done(null, languages);
  });
}

function getLevels (done) {
  Levels.find({}, (err, levels) => {
    return err ? done(err) : done(null, levels);
  });
}

function createUser (newUser, done) {
  async.map(newUser.userLanguages, (userLanguage, next) => {
    let language = Object.keys(userLanguage);
    let level = userLanguage[language[0]];
    let newUserLanguage = new UserLanguages({language, level});

    newUserLanguage.save((err, userLanguage) => {
      return err ? next(err) : next(null, userLanguage);
    });
  }, (err, userLanguages) => {
    if (err) return done(err);
    let createdUserLanguages = userLanguages;
    
    newUser.userLanguages = userLanguages.reduce((res, userLanguage) => {
      res.push(userLanguage._id);
      return res;
    }, []);

    newUser = new Users(newUser);
    
    newUser.save((err, createdUser) => {
      createdUser.userLanguages = createdUserLanguages;
      done(null, createdUser);
    });
  });
}

function composeNewUser (info) {
  info.createdUser.UserLanguages = info.createdUser.userLanguages.map(userLanguage => {
    info.languages.forEach((language) => {
      if (language._id.toString() === userLanguage.language.toString()) {
        userLanguage.language = language.name;
      }
    });
    
    info.levels.forEach((level) => {
      if (level._id.toString() === userLanguage.level.toString()) {
        userLanguage.level = level.name;
      }
    });

    return userLanguage;
  });
  
  return info.createdUser;
}

function postNewUserController (req, res, next) {
  let newUser = req.body;    
  
  async.parallel({
    createdUser: createUser.bind(null, newUser),
    languages: getLanguages,
    levels: getLevels
  }, (err, result) => {
    let composedNewUser = composeNewUser(result);
    
    return err ? next(err) : res.status(201).send({user: composedNewUser});
  });
}

module.exports = postNewUserController;