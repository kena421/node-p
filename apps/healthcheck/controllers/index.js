class HealthCheckController{

  ping(req, res){
    res.status(200).json({reply: 'pong'});
  }
  
  healthcheck(req, res){
    res.json({healthcheck: 'success'});
  }
}



module.exports = new HealthCheckController()