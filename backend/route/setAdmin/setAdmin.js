const mongoose = require('mongoose');

// Define the schema for User
const userSchema = new mongoose.Schema({
  // Define your schema fields here
  // For example:

role : Object
  
});

// Create the User model from the schema
const setAdmin = mongoose.model('register', userSchema);

module.exports = setAdmin; // Export the User model
