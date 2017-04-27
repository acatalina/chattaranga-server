const Users = require('../models/Users');

function putUser (req, res, next) {
  const {username} = req.params;

  Users.update(
    {username: username},
    {$inc: {smileys: 1}
    }, function (err) {
      if (err) return next(err);
      
      res.status(204).send();
    }
  );
}

module.exports = putUser;