class HealthCheckController{

  ping(req, res){
    res.status(200).json({reply: 'pong'});
  }
  
  healthcheck(req, res){
    res.json({healthcheck: 'success'});
  }

  getConfig(req, res){
    const env = require('config/env')
    res.status(200).json(env);
  }
}



module.exports = new HealthCheckController()