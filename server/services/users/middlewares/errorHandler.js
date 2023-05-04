const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error";

  if (err.name === "BSONTypeError") {
    status = 404;
    message = "DATA NOT FOUND!";
  } else if (err.name === 'BadRequest'){
    status = 400;
    message = 'Please completed your input data!'
  }

  return res.status(status).json({ message });
};

module.exports = { errorHandler };
