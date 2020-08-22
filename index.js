const express = require('express')
const app = express()
const config = require('./config')
const T = require('twit')

app.get('/', (req, res) => {
  res.send('Hello World!')
  T.post('statuses/update', { status: 'Ciao Amici!' }, function(err, data, response) {
    console.log(data)
  })
})

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
