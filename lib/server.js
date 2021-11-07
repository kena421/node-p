const express = require('express');
const logger = require('./logger');

class Server{

  constructor(){
    this.PORT = process.env.PORT
    this.app = express();
    this.PID = process.pid
    this.logger = logger
  }

  start(port){
    this.PORT = port || this.PORT
    if(this.PORT === undefined){
      this.logger.critical("PORT not supplied")
      process.exit()
    }
    this.app.listen(this.PORT, ()=>this.logger.info(this.server_message))
  }

  use(middleware){
    this.app.use(middleware)
    return this
  }

  get server_message(){
    return `[${this.PID}]http://localhost:${this.PORT} ::running`
  }

}

module.exports = Server