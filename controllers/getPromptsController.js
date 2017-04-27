const Prompts = require('../models/Prompts');
const Languages = require('../models/Languages');
const Levels = require('../models/Levels');
const Topics = require('../models/Topics');
const {normaliseDataById} = require('../lib/helpers');
const async = require('async');

function getLanguageIdByName (language, done) {
  Languages.find({name: language.toLowerCase()}, (err, language) => {
    return err ? done(err) : done(null, language[0]._id);
  });
}

function getLevelIdByName (level, done) {
  Levels.find({name: level.toLowerCase()}, (err, level) => {
    return err ? done(err) : done(null, level[0]._id);
  });
}

function getAllTopics (done) {
  Topics.find({}, (err, topics) => {
    return err ? done(err) : done(null, normaliseDataById(topics));
  });
}

function getPrompts (req, res, next) {
  const {language, level} = req.params;

  async.parallel({
    language: getLanguageIdByName.bind(null, language),
    level: getLevelIdByName.bind(null, level),
    topics: getAllTopics
  }, ((err, result) => {
    let query = {
      language: result.language,
      level: result.level
    };
    Prompts.find(query, (err, prompts) => {
      if (err) return next(err);
      if (!prompts.length) return next({name: 'CastError'});
      
      prompts = prompts.map(prompt => {
        prompt.language = language;
        prompt.level = level;
        prompt.topic = result.topics[prompt.topic].topic;
        return prompt;
      });
      
      res.status(200).send({prompts: prompts});
    });
  }));
}

module.exports = getPrompts;