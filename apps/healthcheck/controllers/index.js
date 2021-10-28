class HealthCheckController{

  ping(req, res){
    res.status(200).send('pong');
  }
  
  healthcheck(req, res){
    res.send('healthcheck success');
  }
}



module.exports = new HealthCheckController()