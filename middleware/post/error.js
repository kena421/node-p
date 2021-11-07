const logger = require("lib/logger");

const errorMiddleware = (err, req, res, next) => {
  if(err){
    logger.error(err.stack)
    res.status(500).json({message: 'something went wrong'})
  }
  res.status(404).send('not Found');
  next()
}

module.exports = errorMiddleware