const express = require('express')
const app = express()
const config = require('./config')
const Twitter = require('twitter')

const T = new Twitter(config)

app.get('/', (req, res) => {
  T.post('statuses/update', { status: 'Ciao Amici!' }, function (err, data, response) {
    res.send({
      data: data,
      response: response,
      hello: 'world'
    })
  })
})

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
