const env = require('../../config/env')
const mongoose = require('mongoose')

class MongoDB{

  constructor(uri, connectionParams={}){
    this._uri = uri;
    this._connectionParams = connectionParams;
    this._db = mongoose;
  }
  setup(){
    console.log("connecting to "+this._uri)
    this.connect();
    this.registerEvents();
  }

  connect(){
    console.log("trying to connect with "+this._uri+" "+ this._connectionParams)
    this._db
      .connect(this._uri, this._connectionParams)
      .then(()=>console.log("db connected"))
      .catch(()=>console.log("Error Connecting"))

  }

  connection(){
    return this._db.connection
  }

  registerEvents(){
    this.connection()
      .on('connected',()=>console.log("db::connected"))
    this.connection()
      .on('error', (err)=>console.log("db::error", err))
    this.connection()
      .on('disconnected', ()=>console.log("db::disconnected"))
    process.on('SIGINT',()=> this.close())
  }

  async close(){
    try{
      await this.connection().close()
    }
    catch(err){
      console.log(err)
    }
    process.exit()
  }

}

module.exports = MongoDB;