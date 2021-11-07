function HealthCheckController(){}

HealthCheckController.ping = async(req, res) => {
    
    res.status(200).json({reply: 'pong'});
}

HealthCheckController.healthcheck = async(req, res) => {
  res.json({healthcheck: 'success'});
}

HealthCheckController.getConfig = async (req, res) => {
    const env = require('config/env')
    res.status(200).json(env);
}

module.exports = HealthCheckController