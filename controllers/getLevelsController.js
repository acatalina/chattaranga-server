const Levels = require('../models/Levels');

function getLevels (req, res, next) {
  Levels.find({}, (err, levels) => {
    if (err) return next(err);
    
    res.status(200).send({levels: levels});
  });
}

module.exports = getLevels;