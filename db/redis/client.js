const env = require('../../config/env')
const Redis = require('.')

const redis = new Redis({host: env.REDIS_HOST, port: env.REDIS_PORT, password: env.REDIS_PASSWORD});
redis.setup()
const client = redis.getClient()

module.exports = client