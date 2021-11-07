const mongoose = require('mongoose')
const { pincodeValidator } = require('validations')

const UserSchema = new mongoose.Schema({
  
  firstName: { type: String },
  lastName: { type: String },
  
  passwordDigest: { type: String },
  isPasswordRandom: { type: Boolean },
  isLoginDisabled: { type: Boolean },
  pwdLastChangedDate: { type: Date },

  dob: { type: Date },
  uuid: { type: String },
  verifiedEmail: { type: String },
  unverifiedEmail: { type: String },
  phone: { type: String },

  profilePrictureUrl: { type: String },

  address: {
    addressLine1: { type: String },
    addressLine2: { type: String },
    district: { type: String },
    city: { type: String },
    pincode:{ type: Number, validate: pincodeValidator },
    state: { type: String },
    country: { type: String, default: 'India' }
  }
})

const User = mongoose.model('user', UserSchema)

module.exports = User