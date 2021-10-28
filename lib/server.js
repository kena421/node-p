const express = require('express')

class Server{
  constructor(){
    this.app = express();
  }
 
  start(port=process.env.PORT){
    if(port === undefined){
      console.log("PORT not supplied")
      process.exit()
    }

    this.app.listen(port, ()=>console.log(`server is running at http://localhost:${port}`))
  }

  use(middleware){
    this.app.use(middleware)
    return this
  }
}

module.exports = Server