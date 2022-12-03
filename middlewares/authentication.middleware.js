const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const ApiError = require('../scripts/responses/error/api-error');

module.exports = async function (req, res, next) {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    const error = new ApiError('Access Denied', httpStatus.UNAUTHORIZED, res);
    throw Error(error);
  }

  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
    if (err) {
      const error = new ApiError('Invalid access token', httpStatus.BAD_REQUEST, res);
      throw Error(error);
    }

    req.user = decoded;

    next();
  });
};

// The next function is a function in the Express router
// which, when invoked, executes the middleware succeeding
// the current middleware. Middleware functions can perform
// the following tasks: Execute any code. Make changes to the
// request and the response objects.
