const pincodeValidator = {}

pincodeValidator.message = props => `${props.value} is not a valid Pincode.`,
pincodeValidator.validate = (val) => {
  return /^[0-9]{6}$/.test(value)
}

console.log(pincodeValidator)

module.exports = pincodeValidator