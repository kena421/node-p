const notFoundMiddleware = (req, res, next) => {
  res.status(404).send('not Found');
  next()
}

module.exports = notFoundMiddleware