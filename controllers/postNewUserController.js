const Users = require('../models/Users');
const UserLanguages = require('../models/UserLanguages');
const async = require('async');

function postNewUserController (req, res, next) {
  let newUser = req.body;    

  async.map(newUser.userLanguages, (userLanguage, next) => {
    let language = Object.keys(userLanguage);
    let level = userLanguage[language[0]];
    let newUserLanguage = new UserLanguages({language, level});

    newUserLanguage.save((err, userLanguage) => {
      return err ? next(err) : next(null, userLanguage);
    });
  }, (err, userLanguages) => {
    if (err) return next(err);
    let createdUserLanguages = userLanguages;
    
    newUser.userLanguages = userLanguages.reduce((res, userLanguage) => {
      res.push(userLanguage._id);
      return res;
    }, []);

    newUser = new Users(newUser);
    
    newUser.save((err, createdUser) => {
      createdUser.userLanguages = createdUserLanguages;

      return err ? next(err) : res.status(201).send({user: createdUser});
    });
  });
}

module.exports = postNewUserController;