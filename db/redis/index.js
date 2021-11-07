const logger = require('lib/logger');
const redis = require('redis');

class Redis{
  constructor(connectionParams){
    this._db = redis;
    this._connectionParams = connectionParams;
    this.logger = logger
  }

  setup(){
    this.connect()
  }

  connect(){
    this.client = this._db.createClient(this._connectionParams)
    this.registerEvents();
  }

  registerEvents(){
    this.client
      .on('error', err=>this.logger.error('Error ' + err));
    this.client
      .on('connect',()=>this.logger.info('redis::connected'))
    this.client
      .on('reconnecting', ()=>this.logger.error('redis::reconecting'))
    this.client
      .on('end', ()=>this.logger.error('redis::end'))
  }

  getClient(){
    return this.client
  }
}

module.exports = Redis