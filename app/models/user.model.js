var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { 
    type: String, 
    unique: true
  },
  secret_question: String,
  answer_to_question: String,
  user_status: Number,
  password: String,
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);

