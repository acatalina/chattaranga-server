const Users = require('../models/Users');

function putUser (req, res, next) {
  const {username} = req.params;

  Users.update(
    {username: username},
    {$inc: {smileys: 1}
  }, function (err, response) {
      if (response.nModified === 0) return next({name: 'CastError'});
      
      return err ? next(err) : res.status(204).send();
    }
  );
}

module.exports = putUser;