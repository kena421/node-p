const mongoose = require('lib/mongoose')
const pincodeValidator = require('validations/pincode')

const AddressSchema = new mongoose.Schema({
    addressLine1: { type: String },
    addressLine2: { type: String },
    district: { type: String },
    city: { type: String },
    pincode:{ type: Number, validate1: pincodeValidator },
    state: { type: String },
    country: { type: String, default: 'India' }
})
  
const Address = mongoose.model('address', AddressSchema)

module.exports = Address