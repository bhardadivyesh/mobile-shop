const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
photo: String,

  
});

const baseImages = mongoose.model('baseImages', userSchema);

module.exports = baseImages; 
