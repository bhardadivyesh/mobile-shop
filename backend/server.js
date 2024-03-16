const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require("cors")
const registrationRoute  = require('./route/register/registrationRoutes')

const app = express();
app.use(cors())
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://testUser:II326v46vW7mulyx@cluster0.cyvyuf0.mongodb.net/demo_auth?retryWrites=true&w=majority')

app.use(registrationRoute);

// Start the server
const port = 3000;
app.listen(port, async () => {
  
  console.log(`Server is running on http://localhost:${port}`);
});
