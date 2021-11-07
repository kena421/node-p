const bcrypt = require("bcryptjs")

class Bcrypt{

  static #saltRounds = 10

  static salt = async () => {
    try{
      const salt = await bcrypt.genSalt(Bcrypt.#saltRounds)
      return salt
    } catch (e){
      throw e
    }
  }

  static hash = async (val, salt) => {
    try{
      const hash = await bcrypt.hash(val, salt)
      return hash
    } catch(e){
      throw e
    }
  }

  static encrypt = async(val) => {
    try {
      const salt = await Bcrypt.salt()
      const hash = await Bcrypt.hash(val, salt)
      return hash
    } catch(e){
      throw e
    }
  }

}

module.exports = Bcrypt