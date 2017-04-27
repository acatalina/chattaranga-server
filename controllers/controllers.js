const getBadges = require('./getBadgesController');
const getLanguages = require('./getLanguagesController');
const getLevels = require('./getLevelsController');
const getPrompts = require('./getPromptsController');
const getUser = require('./getUserController');
const putUserSmileys = require('./putUserSmileysController');
const putUserLanguage = require('./putUserLanguageController');
const postNewUser = require('./postNewUserController');

module.exports = {
  getBadges,
  getLanguages,
  getPrompts,
  getLevels,
  getUser,
  putUserSmileys,
  putUserLanguage,
  postNewUser,
};