const Badges = require('../models/Badges');

function getBadges (req, res, next) {
  Badges.find({}, (err, badges) => {
    if (err) return next(err);
    
    res.status(200).send({badges: badges});
  });
}

module.exports = getBadges;