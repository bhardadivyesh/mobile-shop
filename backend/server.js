const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const registrationRoute = require('./route/register/registrationRoutes');
const baseimageRoute = require('./route/baseImage/baseimageRoute')
const otpRoute = require('./route/otp/otpSend')
const feedback = require('./route/feedback/feedbackRoute')

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://testUser:II326v46vW7mulyx@cluster0.cyvyuf0.mongodb.net/demo_auth?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use(registrationRoute);
app.use(baseimageRoute);
app.use(otpRoute);
app.use(feedback);


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
