const async = require('async');

const Users = require('../models/Users');
const UserLanguages = require('../models/UserLanguages');
const Languages = require('../models/Languages');
const Levels = require('../models/Levels');

function getUser (username, next) {
  Users.find({username: username}, (err, user) => {
    if (err) return next(err);
    if (!user.length) return next({name: 'CastError'});
    
    return next(null, user);
  });
}

function getLanguages (userLanguage, level, next) {
  Languages.find({_id: userLanguage}, (err, language) => {
    return err ? next(err) : next(null, language[0].name, level);
  });
}

function getLevels (language, level, done) {
  Levels.find({_id: level}, (err, level) => {
    return err ? done(err) :  done(null, language, level[0].name);
  });
}

function getUserLanguages (user, done) {
  let newUser = user[0];

  async.mapSeries(newUser.userLanguages, (userLanguage, next) => {
    UserLanguages.find({_id: userLanguage}, (err, userLanguage) => {
      if (err) return done(err);
        async.waterfall([
          getLanguages.bind(null, userLanguage[0].language, userLanguage[0].level),
          getLevels
        ], (err, language, level) => {
          if (err) return done(err);
          
          userLanguage[0].language = language;
          userLanguage[0].level = level;
          
          next(null, userLanguage[0]);
        });
    });
  }, (err, newUserLanguages) => {
    newUser.userLanguages = newUserLanguages;
    return err ? done (err) : done(null, newUser);
  });
}

function getUserProfile (req, res, next) {
  const {username} = req.params;

  async.waterfall([
    getUser.bind(null, username),
    getUserLanguages
  ], (err, user) => {
    return err ? next(err) : res.status(200).send({user: user});
  });
}

module.exports = getUserProfile;