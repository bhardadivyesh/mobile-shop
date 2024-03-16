const mongoose = require('mongoose');

// Define the schema for User
const userSchema = new mongoose.Schema({
  // Define your schema fields here
  // For example:
ConfirmPassword : String,
address : String,
city: String,
contactno1 : String,
contactno2: String,
email: String,
gender: String,
name: String,
password: String,
photo: String,
state: String,
userId: String
  
});

// Create the User model from the schema
const User = mongoose.model('register', userSchema);

module.exports = User; // Export the User model
