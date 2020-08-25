/**
 * @author Alessio Proietti <alessio.proietti [at] protonmail.com>
 */

const express = require('express')
const app = express()
const config = require('./config')
const Twitter = require('twitter')
const cron = require('node-cron')
var buildUrl = require('build-url');


const T = new Twitter(config.twitterApi)

app.get('/', (req, res) => {
  T.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
    if(error) throw error;
    res.send('Ciao Amici!')
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });
})


app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
