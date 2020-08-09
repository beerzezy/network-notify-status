const express = require('express')
const bodyParser = require('body-parser')
const ping = require('ping')

const config = require('./config')
const { PORT } = config

const app = express()
app.use(bodyParser.json())

require('./cron-jobs.js')

app.get('/', (req, res) => {
  console.log('Run task by request')

  res.status(200).json({
    message: 'Server response message'
  });
});

app.post('/api/trapreceiver', (req, res) => {
  console.log('Trap Receiver', req.body)

  res.sendStatus(200)
});

app.listen(PORT, () => {
  console.log(`Server start on port: ${PORT}`)
})

async function sendTrapMessageToLine() {
  let token = 'oh9PA0x5oFNDd83fUZRRwlhO44sseTkZFbDRNoGZmQF'

  const { data } = await axios({
    method: 'POST',
    url: 'https://notify-api.line.me/api/notify',
    data: qs.stringify({
      message: `send Trap Message Test`
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    }
  })
  return data
}