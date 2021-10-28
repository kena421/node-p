const env = require('config/env')
const fs = require('fs')
const path = require('path')

let appsLogStream = fs.createWriteStream('logs/apps.log', { flags: 'a' })
if(env.NODE_ENV === "dev" || env.FORCE_CONSOLE_LOG){
  appsLogStream = process.stdout;
  console.log("Logging on console")
}



module.exports = appsLogStream