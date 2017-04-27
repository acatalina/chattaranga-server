const Prompts = require('../models/Prompts');

function getPrompts (req, res, next) {
  const query = {
    language: req.params.language, 
    level: req.params.level
  };

  Prompts.find(query, (err, prompts) => {
    if (err) return next(err);
    if (!prompts.length) return next({name: 'CastError'});

    res.status(200).send({prompts: prompts});
  });
}

module.exports = getPrompts;