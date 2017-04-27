const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const LevelSchema = new Schema({
  name: {
    type: String,
    lowercase: true
  }
});

module.exports = mongoose.model('levels', LevelSchema);