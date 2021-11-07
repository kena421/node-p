const { Bcrypt } = require('lib/utils');
const mongoose = require('mongoose')

class Password extends mongoose.SchemaType {
  constructor(key, options) {
    super(key, options, 'Password');
  }
  async cast(val) {
    try{
      console.log('calling password val')
      const hash = await Bcrypt.encrypt(val)
      return hash
    } catch(e){
      throw e
    }
  }
}

module.exports = Password
