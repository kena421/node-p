const express = require('express')
const cors = require('cors')
const env = require('../env')


class Server{
  constructor(){
    this.app = express();
    this.setup()
  }
 
  start(port){
    this.app.listen(port, ()=>console.log(`server is running at http://localhost:${port}`))
  }

  setup(){
    this.middlewareSetup();
  }

  use(middleware){
    this.app.use(middleware)
    return this
  }

  middlewareSetup(){
    this.use(cors())
  }

  addRoutes(){
    
  }
}

module.exports = Server