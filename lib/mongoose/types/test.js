const mongoose = require('mongoose')

class Test extends mongoose.SchemaType {
  constructor(key, options) {
    super(key, options, 'Test');
  }

  cast(val) {
    if(typeof val === 'string' ) return "String";
    else return "Number"
  }
}

module.exports = Test

