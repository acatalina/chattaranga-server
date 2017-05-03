const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const BadgeSchema = new Schema({
  name: {
    type: String,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('badges', BadgeSchema);