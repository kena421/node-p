const logger = require('lib/logger')

function authController(){}

authController.login = async (req, res) => {

  logger.debug(req.body)
  const { userName, password } = req.body
  logger.debug( userName, password )
  logger.debug( req.path )
  res.send({ message: "logged in"});
}

module.exports = authController