const express = require('express')
const cors = require('cors')
const env = require('../env')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const { stdout } = require('process')
var appsLogStream = fs.createWriteStream(path.join(path.dirname(path.dirname(__dirname)), 'logs', 'apps.log'), { flags: 'a' })
if(env.NODE_ENV === "dev"){
  appsLogStream = stdout;
}



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
    this.use(morgan('tiny', {stream: appsLogStream}))
  }

  addRoutes(){
    
  }
}

module.exports = Server