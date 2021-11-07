const mongoose = require('mongoose');

const CustomTypes = require('./types')

// Assigning custom types in mongoose types
Object.assign(mongoose.Schema.Types, CustomTypes)

module.exports = mongoose