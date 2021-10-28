const env = require('config/env')
const fs = require('fs')
const path = require('path')
let appsLogStream = undefined
if(env.NODE_ENV === "dev" || env.FORCE_CONSOLE_LOG){
  appsLogStream = process.stdout;
  console.log("Logging on console")
}
else{
  appsLogStream = fs.createWriteStream('logs/apps.log', { flags: 'a' })
}



module.exports = appsLogStream