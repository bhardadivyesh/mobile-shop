const mongoose = require('mongoose');

// Define the schema for User
const userSchema = new mongoose.Schema({
  // Define your schema fields here
  // For example:
 image1 : String,
 image2 : String,
 image3 : String,
 image4 : String,
  
});

// Create the User model from the schema
const sliderImage = mongoose.model('slider_images', userSchema);

module.exports = sliderImage; // Export the User model
