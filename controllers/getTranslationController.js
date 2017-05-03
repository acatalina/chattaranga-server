const watson = require('watson-developer-cloud');
const languageTranslator = watson.language_translator({
  url: 'https://gateway.watsonplatform.net/language-translator/api',
  username: '4482ff35-80c8-4ea1-b2e1-2f89c8740b65',
  password: 'g5N7t4oH360z',
  version: 'v2'
});

function getTranslation (req, res) {
  if (!req.query.text) {
    res.status(400).send({error: 'query must have a text field'});
  }
  languageTranslator.translate({
    text: req.query.text,
    source: 'en',
    target: 'es'
  }, (err, translation) => {
    if (err) {
      res.status(500).send({error: err});
    } else {
      res.status(200).send({translation});
    }
  });
}

module.exports = getTranslation;