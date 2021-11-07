const env = require('config/env')
const mongoose = require('mongoose');
const logger = require('lib/logger');

class MongoDB{

  constructor(uri, connectionParams={}){
    this._uri = uri;
    this._connectionParams = connectionParams;
    this._db = mongoose;
    this.logger = logger
  }
  setup(){
    this.connect();
    this.registerEvents();
  }

  connect(){
    this._db
      .connect(this._uri, this._connectionParams)
      .then(()=>this.logger.info("db connected"))
      .catch(()=>this.logger.info("Error Connecting"))

  }

  connection(){
    return this._db.connection
  }

  registerEvents(){
    this.connection()
      .on('connected',()=>this.logger.info("db::connected"))
    this.connection()
      .on('error', (err)=>this.logger.error("db::error", err))
    this.connection()
      .on('disconnected', ()=>this.logger.critical("\ndb::disconnected"))
    process.on('SIGINT',()=> this.close())
  }

  async close(){
    try{
      await this.connection().close()
    }
    catch(err){
      this.logger.error(err)
    }
    process.exit()
  }

}

module.exports = MongoDB;