const express = require('express')
const app = express()
const config = require('./config')
const Twitter = require('twitter')
const cron = require('node-cron');
const T = new Twitter(config)

app.get('/', (req, res) => {
  res.send('Ciao Amici!')
})


app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
