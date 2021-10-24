const Server = require('./config/server')
const MongoDB = require('./db/mongodb')
const Redis = require('./db/redis')
const env = require('./config/env')
require('./db/redis/client')

// DB SETUP
const mongo = new MongoDB(env.MONGODB_URI)
mongo.setup();

// REDIS SETUP

//SERVER SETUP
const server = new Server();
server.start(env.PORT)

 