const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserLanguagesSchema = new Schema({
  language: {
    type: String,
    required: true
  },
  numOfChats: {
    type: Number,
    default: 0
  },
  level: {
    type: String,
    required: true
  },
  talkTime: {
    type: Number,
    default: 0
  },
  teacherPoints: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('userLanguages', UserLanguagesSchema);