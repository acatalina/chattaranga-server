const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('../config');
const db = config.DB[process.env.NODE_ENV] || process.env.DB;

router.get('/', ((req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'api.html'));
}));

mongoose.connect(db, (err) => {
  if (err) return console.log(`error connecting to the Database ${err}`);

  return console.log(`connected to the Database: ${db}`);
});

router.route('/badges')
  .get((controllers.getBadges));

router.route('/prompts/:language/:level')
  .get(controllers.getPrompts);

router.route('/users/:username/')
  .get(controllers.getUser);

router.route('/languages/')
  .get(controllers.getLanguages);

router.route('/levels/')
  .get(controllers.getLevels);

router.route('/users/:username/smileys')
  .put(controllers.putUserSmileys);

router.route('/users/:username/:language')
  .put(controllers.putUserLanguage);

router.use(bodyParser());

router.route('/users')
  .post(controllers.postNewUser);

module.exports = router;