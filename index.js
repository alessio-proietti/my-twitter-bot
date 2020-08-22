const express = require('express')
const app = express()
const config = require('./config')
const Twitter = require('twitter')

const T = new Twitter(config)

app.get('/', (req, res) => {
  res.send('Ciao Amici!')
})

var cron = require('node-cron');

/*cron.schedule('* * * * *', () => {
  T.post('statuses/update', { status: 'Ciao Amici! Ecco un numero random: \n ' + Math.random() }, function (err, tweet, response) {
    console.log('running a task every minute');
  })
});*/

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
