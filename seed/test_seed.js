if (!process.env.NODE_ENV) process.env.NODE_ENV = 'test'; 

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const async = require('async');
const ChattarangaData = require('./data/data');
const Users = require('../models/Users');
const Language = require('../models/Languages');
const Badge = require('../models/Badges');
const Level = require('../models/Levels');
const Topic = require('../models/Topics');
const Prompt = require('../models/Prompts');
const UserLanguages = require('../models/UserLanguages');
const {DB} = require('./.config')[process.env.NODE_ENV];

function addBadges(next) {
  async.map(ChattarangaData.badges, (badge, next) => {
    const newBadge = new Badge(badge);
    newBadge.save((err, res) => {
      return err ? next(err) : next(null, res);
    });
  }, (err, badges) => {
    return err ? next(err) : next(null, badges);
  });
}

function addLanguages(badges, next) {
  async.map(ChattarangaData.languages, (language, next) => {
    const newLanguage = new Language(language);
    newLanguage.save((err, res) => {
      return err ? next(err) : next(null, res);
    });
  }, (err, languages) => {
    return err ? next(err) : next(null, badges, languages);
  });
}

function addLevels(badges, languages, next) {
  async.map(ChattarangaData.levels, (level, next) => {
    const newLevel = new Level(level);
    newLevel.save((err, res) => {
      return err ? next(err) : next(null, res);
    });
  }, (err, levels) => {
    return err ? next(err) : next(null, badges, languages, levels);
  });
}

function addTopics(badges, languages, levels, next) {
  let newTopics = ChattarangaData.topics.map((topic) => {
    topic.language = languages[topic.language]._id;
    topic.level = levels[topic.level]._id;
    return topic;
  });
  
  async.map(newTopics, (topic, next) => {
    const newTopic = new Topic(topic);
    newTopic.save((err, res) => {
      return err ? next(err) : next(null, res);
    });
  }, (err, topics) => {
    return err ? next(err) : next(null, badges, languages, levels, topics);
  });
}

function addPrompts(badges, languages, levels, topics, next) {    
  const newPrompts = ChattarangaData.prompts.map((prompt) => {
    prompt.language = languages[prompt.language]._id;
    prompt.level = levels[prompt.level]._id;    
    prompt.topic = topics[prompt.topic]._id;
    return prompt;
  });
  
  async.map(newPrompts, (prompt, next) => {
    const newPrompt = new Prompt(prompt);
    newPrompt.save((err, res) => {
      return err ? next(err) : next(null, res);
    });
  }, (err, prompts) => {
    return err ? next(err) : next(null, badges, languages, levels, topics, prompts);
  });
}

function addUserLanguages(badges, languages, levels, topics, prompts, next) {  
  const newUserLanguages = ChattarangaData.userLanguages.map((userLanguage) => {
    userLanguage.language = languages[userLanguage.language]._id;
    userLanguage.level = levels[userLanguage.level]._id;
    
    return userLanguage;
  });

  async.map(newUserLanguages, (userLanguage, next) => {
    const UserLanguage = new UserLanguages(userLanguage);
    UserLanguage.save((err, res) => {
      return err ? next(err) : next(null, res);
    });
  }, (err, userLanguages) => {
    return err ? next(err) : next(null, badges, languages, levels, topics, prompts, userLanguages);
  });
}

function addUsers(badges, languages, levels, topics, prompts, userLanguages, done) {
  const newUsers = ChattarangaData.users.map((user) => {
    user.userLanguages = user.userLanguages.map((userLanguage) => {
      return userLanguage = userLanguages[userLanguage]._id;
    });
    return user;
  });

  async.map(newUsers, (user, next) => {
    const User = new Users(user);
    User.save((err, res) => {
      return err ? next(err) : next(null, res);
    });
  }, (err, users) => {
    return err ? done(err) : done(null, badges, languages, levels, topics, prompts, users);
  });
}

function seed(grabData) {
  mongoose.connect(DB, (err) => {
    if (err) {
      console.log(JSON.stringify(err));
      process.exit();
    }
    
    console.log('connected to db');

    mongoose.connection.db.dropDatabase(() => {
      async.waterfall([
        addBadges,
        addLanguages,
        addLevels,
        addTopics,
        addPrompts,
        addUserLanguages,
        addUsers
      ], (err, badges, languages, levels, topics, prompts, users, userLanguages) => {
        if (err) {
          console.log(JSON.stringify(err));
          process.exit();
        }
        
        const data = {
          badges,
          languages,
          levels,
          topics,
          prompts,
          userLanguages,
          users
        };
        if (grabData) grabData(data);
        console.log('DONE SEEDING!');
        process.exit();
        });
    });
  });
}

module.exports = seed;