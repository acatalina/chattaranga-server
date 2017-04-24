const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true
  },
  userLanguages: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  smileys: {
    type: Number,
    required: true
  },
  memberSince: {
    type: String,
    default: new Date()
  }
});

module.exports = mongoose.model('users', UserSchema);