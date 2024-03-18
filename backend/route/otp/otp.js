const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
otp: Number,

  
});

// Create the User model from the schema
const otpdigit = mongoose.model('otp', userSchema);

module.exports = otpdigit; // Export the User model
