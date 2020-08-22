const express = require('express')
const app = express()
const config = require('./config')
const Twit = require('twitter')

var T = new Twitter(config)

app.get('/', (req, res) => {
  res.send('Hello World!')
  T.post('statuses/update', { status: 'Ciao Amici!' }, function (err, data, response) {
    res.send(data)
    res.send(response)
  })
})

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
