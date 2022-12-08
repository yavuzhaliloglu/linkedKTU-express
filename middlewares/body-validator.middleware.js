const httpStatus = require('http-status');
const ApiError = require('../scripts/responses/error/api-error');

const bodyValidator = (schema) => (req, res, next) => {
  const options = {
    errors: { wrap: { label: "'" } },
    abortEarly: false,
  };

  if (
    Object.keys(req.body || {}).length === 0
    && Object.keys(req.files || {}).length === 0
  ) {
    const apierror = new ApiError('Request body must not be empty', httpStatus.BAD_REQUEST, res);
    throw Error(apierror);
  }

  const { error } = schema.validate(req.body, options);
  // ????? validate?

  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(', ');
    const apierror = new ApiError(errorMessage, httpStatus.BAD_REQUEST, res);
    throw Error(apierror);
  }

  next();
};

module.exports = bodyValidator;
