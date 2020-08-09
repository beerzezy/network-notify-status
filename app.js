const express = require('express')
const app = express()
const ping = require('ping')

const config = require('./config')
const { PORT } = config

require('./cron-jobs.js')

app.get('/', (req, res) => {
  console.log('Run task by request')

  res.status(200).json({
    message: 'Server response message'
  });
});

app.post('/api/trapreceiver', (req, res) => {
  console.log('Trap Receiver')

  res.sendStatus(200)
});

app.listen(PORT, () => {
  console.log(`Server start on port: ${PORT}`)
})