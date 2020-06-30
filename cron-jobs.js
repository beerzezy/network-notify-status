const config = require('./config')
const { JOB_SCHEDULE } = config
const cron = require('node-cron')
const ping = require('ping')
const axios = require('axios')
const qs = require('qs')
const fs = require('fs')

cron.schedule(JOB_SCHEDULE, () => {
    checkStatusSw9400()
    console.log('Run task every minute')
})

function checkStatusSw9400() {
    let rawdata = fs.readFileSync('devicestatus/sw9400.json')
    let device = JSON.parse(rawdata)
    console.log('Check status devices sw9400 IP: ', device.device_ip)
  
    ping.sys.probe(device.device_ip, function(isAlive){
        console.log(`${device.device_name} ip address : ${device.device_ip} status is ${isAlive}`)
        if (isAlive == false) {
            if (device.status == 'Up') {
                sendMessage(device.device_ip, device.device_name, isAlive)
                console.log('send notify')
                let sw9400 = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Down"
                }
                let data = JSON.stringify(sw9400)
                fs.writeFileSync('devicestatus/sw9400.json', data)
            }
        } else if (isAlive == true) {
            if (device.status == 'Down') {
                let sw9400 = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Up"
                }
                let data = JSON.stringify(sw9400)
                fs.writeFileSync('devicestatus/sw9400.json', data)
            }
        }
    })
}

async function sendMessage(device_ip, device_name, isAlive) {
    console.log('sendMessage : ', device_name, device_ip)
    let token = 'oh9PA0x5oFNDd83fUZRRwlhO44sseTkZFbDRNoGZmQF'
    let status = isAlive ? 'Up' : 'Down'

    const { data } = await axios({
      method: 'POST',
      url: 'https://notify-api.line.me/api/notify',
      data: qs.stringify({
        message: `${device_name} is ${status}, ip address : ${device_ip}`
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
      }
    })
    return data
}
