const Server = require('lib/server')
const MongoDB = require('db/mongodb')
const Redis = require('db/redis')
const env = require('config/env')
const preMiddleware = require('middleware/pre')
const postMiddleware = require('middleware/post')
const routes = require('config/routes')

// REDIS SETUP
require('db/redis/client')

// DB SETUP
const mongo = new MongoDB(env.MONGODB_URI)
mongo.setup();

//SERVER SETUP
const server = new Server();
server.use(preMiddleware)
server.use(routes)
server.use(postMiddleware)
server.start(env.PORT)

 