const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send();
});


app.post('/registration', (req, res) => {
  const postData = req.body;
  res.send('registration data');
});

app.post('/login', (req, res) => {
    const postData = req.body;
    res.send('login data');
  });

  app.post('/feedback', (req, res) => {
    const postData = req.body;
    res.send('feedback Data');
  });

  app.post('/addmaincategory', (req, res) => {
    const postData = req.body;
    res.send('feedback Data');
  });

  app.post('/addnewseries', (req, res) => {
    const postData = req.body;
    res.send('feedback Data');
  });

  app.post('/addsubcategory', (req, res) => {
    const postData = req.body;
    res.send('feedback Data');
  });

  app.post('/addnewproduct', (req, res) => {
    const postData = req.body;
    res.send('feedback Data');
  });

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
