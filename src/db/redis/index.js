const redis = require('redis');

class Redis{
  constructor(connectionParams){
    this._db = redis;
    this._connectionParams = connectionParams;
  }

  setup(){
    console.log("connecting to redis")
    this.connect()
  }

  connect(){
    this.client = this._db.createClient(this._connectionParams)
    this.registerEvents();
  }

  registerEvents(){
    console.log("trying to connect with "+this._uri+" "+ this._connectionParams)
    this.client
      .on('error', err=>console.log('Error ' + err));
    this.client
      .on('connect',()=>console.log('redis::connected'))
    this.client
      .on('reconnecting', ()=>console.log('redis::reconecting'))
    this.client
      .on('end', ()=>console.log('redis::end'))
  }

  getClient(){
    return this.client
  }
}

module.exports = Redis