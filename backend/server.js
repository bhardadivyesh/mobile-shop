const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const registrationRoute = require('./route/register/registrationRoutes');
const baseimageRoute = require('./route/baseImage/baseimageRoute')
const otpRoute = require('./route/otp/otpSend')
const feedback = require('./route/feedback/feedbackRoute')
const admin = require('./route/setAdmin/setAdminRoute')
const sliderImage = require('./route/sliderImages/sliderImageRoute')
const productRoute = require('./route/products/productRoute')
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use(registrationRoute);
app.use(baseimageRoute);
app.use(otpRoute);
app.use(feedback);
app.use(admin);
app.use(sliderImage);
app.use(productRoute)

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
