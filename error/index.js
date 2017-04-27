module.exports = (err, req, res, next) => {
  if (err) {
    let statusCode;
    let message;

    switch (err.name) {
      case 'CastError':
        statusCode = 404;
        message = {reason: 'Not found'};
        break;
      case 'ValidationError':
        statusCode = 400;
        message = {reason: err.errors.body.message};
        break;
      case 'NOTHING':
        statusCode = 204;
        break;
      case 'QUERY':
        statusCode = 400;
        message = {reason: 'Invalid query'};
        break;
      case 'ID':
        statusCode = 400;
        message = {reason: 'Invalid id'};
        break;
      default:
        statusCode = 500;
        message = {err: err};
    }

    res.status(statusCode).send(message);
    next();
  }
};