const env = require('config/env')
const fs = require('fs')
const path = require('path')

let appsLogStream = fs.createWriteStream('logs/apps.log', { flags: 'a' })
if(env.NODE_ENV === "dev"){
  appsLogStream = process.stdout;
}

module.exports = appsLogStream