const { Schema } = require('mongoose');

const User = new Schema({
  name: String,
  firstName:   String,
  lastName:   String,
  passwordDigest: String,
  uuid: String,
  verifiedEmail: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});