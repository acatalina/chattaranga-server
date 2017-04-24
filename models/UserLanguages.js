const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserLanguagesSchema = new Schema({
  language: {
    type: String,
    required: true
  },
  numOfChats: {
    type: Number,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  talkTime: {
    type: Number,
    required: true
  },
  teacherPoints: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('userLanguages', UserLanguagesSchema);