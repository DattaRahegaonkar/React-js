const express = require('express');
const mongoose = require('mongoose');
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => {
    console.log("Server is Running");
})