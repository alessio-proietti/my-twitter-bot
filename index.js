/**
 * @author Alessio Proietti <alessio.proietti [at] protonmail.com>
 */

const express = require('express')
const app = express()
const config = require('./config')
const Twitter = require('twitter')
const cron = require('node-cron')
var buildUrl = require('build-url');
const client = require('twilio')(accountSid, authToken);
const T = new Twitter(config.twitterApi)


const accountSid = config.accountSid;
const authToken = config.authToken;



app.get('/', (req, res) => {
  T.post('statuses/update', { status: 'Hello Master! This is one of my test messages.' }, function (error, tweet, response) {
    if (error) throw error;
    res.send('Ciao Amici!')
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.


    client.messages
      .create({ body: config.twiliobody, from: config.number.from, to: config.number.to })
      .then(message => console.log(message.sid));
  });
})


app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
