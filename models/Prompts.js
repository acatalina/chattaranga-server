const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const PromptSchema = new Schema({
  topic: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('prompts', PromptSchema);