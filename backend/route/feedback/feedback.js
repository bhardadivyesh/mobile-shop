const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    number : Number,
    email : String,
    feedbackData : String
});

const feedbackModel = mongoose.model('feedback', userSchema);

module.exports = feedbackModel; 
