function logger(){}

logger.info = (...msg) => {
  if(process.env.NODE_ENV === 'production'){
    console.log(msg)
  }
  else{
    console.log(msg)
  }
}
logger.debug = (...msg) => {
  if(process.env.NODE_ENV === 'production'){
    console.log(msg)
  }
  else{
    console.log(msg)
  }
}
logger.critical = (...msg) => {
  if(process.env.NODE_ENV === 'production'){
    console.log(msg)
  }
  else{
    console.log(msg)
  }
}
logger.warning = (...msg) => {
  if(process.env.NODE_ENV === 'production'){
    console.log(msg)
  }
  else{
    console.log(msg)
  }
}

module.exports = logger

