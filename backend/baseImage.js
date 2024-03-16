const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
photo: String,

  
});

// Create the User model from the schema
const baseImages = mongoose.model('baseImages', userSchema);

module.exports = baseImages; // Export the User model
