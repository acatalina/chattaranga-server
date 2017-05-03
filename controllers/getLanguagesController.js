const Languages = require('../models/Languages');

function getLanguages (req, res, next) {
  Languages.find({}, (err, languages) => {
    if (err) return next(err);
    
    res.status(200).send({languages: languages});
  });
}

module.exports = getLanguages;