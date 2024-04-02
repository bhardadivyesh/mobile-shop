const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
color : String,
discount : String,
maincategory: String,
images : Object,
price: String,
productdescription: String,
productid: String,
billno: String,
productname: String,
purchasedate : String,
purchasedetail : String,
quantity : String,
series : String,
size : String,
status : String,
subcategory : String,
softDelete : Boolean
});

// Create the User model from the schema
const product = mongoose.model('products', userSchema);

module.exports = product; // Export the User model
