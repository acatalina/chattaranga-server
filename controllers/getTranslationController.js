const watson = require('watson-developer-cloud');
const languageTranslator = watson.language_translator({
  url: 'https://gateway.watsonplatform.net/language-translator/api',
  username: '4482ff35-80c8-4ea1-b2e1-2f89c8740b65',
  password: 'g5N7t4oH360z',
  version: 'v2'
});

function getTranslation (req, res, next) {
  if (!req.query.text || !req.query.sourceLanguage || !req.query.targetLanguage) {
    return next({name: 'QUERY'});
  }
  languageTranslator.translate({
    text: req.query.text,
    source: req.query.sourceLanguage,
    target: req.query.targetLanguage
  }, (err, translation) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).send({translation: translation.translations[0].translation});
    }
  });
}

module.exports = getTranslation;