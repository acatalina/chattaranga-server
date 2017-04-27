const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true
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
    default: 0
  },
  memberSince: {
    type: String,
    default: new Date()
  },
  userLanguages: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('users', UserSchema);