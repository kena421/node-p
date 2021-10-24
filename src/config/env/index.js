const env = process.env;

const DEFAULT_MONGODB_URI = 'mongodb+srv://kena421:123%40Kedar@cluster0.jtuem.mongodb.net/node-p?retryWrites=true&w=majority';
const DEFAULT_REDIS_HOST = 'redis-12240.c264.ap-south-1-1.ec2.cloud.redislabs.com';
const DEFAULT_REDIS_PORT = '12240';
const DEFAULT_REDIS_PASSWORD = 'gZyqnN2vwsjPbewPQ74o90socF0UDq88'
const DEFAULT_PORT = 3000
module.exports = {
  PORT: env.PORT || DEFAULT_PORT,
  MONGODB_URI: env.MONGODB_URI || DEFAULT_MONGODB_URI,
  REDIS_HOST: env.REDIS_HOST || DEFAULT_REDIS_HOST,
  REDIS_PORT: env.REDIS_PORT || DEFAULT_REDIS_PORT,
  REDIS_PASSWORD: env.REDIS_PASSWORD || DEFAULT_REDIS_PASSWORD,
}