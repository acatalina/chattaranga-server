const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const TopicSchema = new Schema({
  language: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('topics', TopicSchema);