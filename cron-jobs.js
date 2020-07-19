const config = require('./config')
const { JOB_SCHEDULE } = config
const cron = require('node-cron')
const ping = require('ping')
const axios = require('axios')
const qs = require('qs')
const fs = require('fs')

cron.schedule(JOB_SCHEDULE, () => {
    checkStatusSw9400()
    checkStatus415()
    checkStatuRsad()
    checkStatuR101c()
    checkStatuR124()
    checkStatuR330a()
    checkStatuRshop()
    checkStatuR415()
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

function checkStatus415() {
    let rawdata = fs.readFileSync('devicestatus/r415.json')
    let device = JSON.parse(rawdata)
    console.log('Check status devices r415 IP: ', device.device_ip)
  
    ping.sys.probe(device.device_ip, function(isAlive){
        console.log(`${device.device_name} ip address : ${device.device_ip} status is ${isAlive}`)
        if (isAlive == false) {
            if (device.status == 'Up') {
                sendMessage(device.device_ip, device.device_name, isAlive)
                console.log('send notify')
                let r415 = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Down"
                }
                let data = JSON.stringify(r415)
                fs.writeFileSync('devicestatus/r415.json', data)
            }
        } else if (isAlive == true) {
            if (device.status == 'Down') {
                let r415 = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Up"
                }
                let data = JSON.stringify(r415)
                fs.writeFileSync('devicestatus/r415.json', data)
            }
        }
    })
}

function checkStatuRsad() {
    let rawdata = fs.readFileSync('devicestatus/rsad.json')
    let device = JSON.parse(rawdata)
    console.log('Check status devices rsad IP: ', device.device_ip)
  
    ping.sys.probe(device.device_ip, function(isAlive){
        console.log(`${device.device_name} ip address : ${device.device_ip} status is ${isAlive}`)
        if (isAlive == false) {
            if (device.status == 'Up') {
                sendMessage(device.device_ip, device.device_name, isAlive)
                console.log('send notify')
                let rsad = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Down"
                }
                let data = JSON.stringify(rsad)
                fs.writeFileSync('devicestatus/rsad.json', data)
            }
        } else if (isAlive == true) {
            if (device.status == 'Down') {
                let rsad = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Up"
                }
                let data = JSON.stringify(rsad)
                fs.writeFileSync('devicestatus/rsad.json', data)
            }
        }
    })
}

function checkStatuR101c() {
    let rawdata = fs.readFileSync('devicestatus/r101c.json')
    let device = JSON.parse(rawdata)
    console.log('Check status devices r101c IP: ', device.device_ip)
  
    ping.sys.probe(device.device_ip, function(isAlive){
        console.log(`${device.device_name} ip address : ${device.device_ip} status is ${isAlive}`)
        if (isAlive == false) {
            if (device.status == 'Up') {
                sendMessage(device.device_ip, device.device_name, isAlive)
                console.log('send notify')
                let r101c = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Down"
                }
                let data = JSON.stringify(r101c)
                fs.writeFileSync('devicestatus/r101c.json', data)
            }
        } else if (isAlive == true) {
            if (device.status == 'Down') {
                let r101c = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Up"
                }
                let data = JSON.stringify(r101c)
                fs.writeFileSync('devicestatus/r101c.json', data)
            }
        }
    })
}

function checkStatuR124() {
    let rawdata = fs.readFileSync('devicestatus/r124.json')
    let device = JSON.parse(rawdata)
    console.log('Check status devices r124 IP: ', device.device_ip)
  
    ping.sys.probe(device.device_ip, function(isAlive){
        console.log(`${device.device_name} ip address : ${device.device_ip} status is ${isAlive}`)
        if (isAlive == false) {
            if (device.status == 'Up') {
                sendMessage(device.device_ip, device.device_name, isAlive)
                console.log('send notify')
                let r124 = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Down"
                }
                let data = JSON.stringify(r124)
                fs.writeFileSync('devicestatus/r124.json', data)
            }
        } else if (isAlive == true) {
            if (device.status == 'Down') {
                let r124 = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Up"
                }
                let data = JSON.stringify(r124)
                fs.writeFileSync('devicestatus/r124.json', data)
            }
        }
    })
}

function checkStatuR330a() {
    let rawdata = fs.readFileSync('devicestatus/r330a.json')
    let device = JSON.parse(rawdata)
    console.log('Check status devices r330a IP: ', device.device_ip)
  
    ping.sys.probe(device.device_ip, function(isAlive){
        console.log(`${device.device_name} ip address : ${device.device_ip} status is ${isAlive}`)
        if (isAlive == false) {
            if (device.status == 'Up') {
                sendMessage(device.device_ip, device.device_name, isAlive)
                console.log('send notify')
                let r330a = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Down"
                }
                let data = JSON.stringify(r330a)
                fs.writeFileSync('devicestatus/r330a.json', data)
            }
        } else if (isAlive == true) {
            if (device.status == 'Down') {
                let r330a = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Up"
                }
                let data = JSON.stringify(r330a)
                fs.writeFileSync('devicestatus/r330a.json', data)
            }
        }
    })
}

function checkStatuRshop() {
    let rawdata = fs.readFileSync('devicestatus/rshop.json')
    let device = JSON.parse(rawdata)
    console.log('Check status devices rshop IP: ', device.device_ip)
  
    ping.sys.probe(device.device_ip, function(isAlive){
        console.log(`${device.device_name} ip address : ${device.device_ip} status is ${isAlive}`)
        if (isAlive == false) {
            if (device.status == 'Up') {
                sendMessage(device.device_ip, device.device_name, isAlive)
                console.log('send notify')
                let rshop = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Down"
                }
                let data = JSON.stringify(rshop)
                fs.writeFileSync('devicestatus/rshop.json', data)
            }
        } else if (isAlive == true) {
            if (device.status == 'Down') {
                let rshop = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Up"
                }
                let data = JSON.stringify(rshop)
                fs.writeFileSync('devicestatus/rshop.json', data)
            }
        }
    })
}

function checkStatuR415() {
    let rawdata = fs.readFileSync('devicestatus/3850-r415.json')
    let device = JSON.parse(rawdata)
    console.log('Check status devices 3850-r415 IP: ', device.device_ip)
  
    ping.sys.probe(device.device_ip, function(isAlive){
        console.log(`${device.device_name} ip address : ${device.device_ip} status is ${isAlive}`)
        if (isAlive == false) {
            if (device.status == 'Up') {
                sendMessage(device.device_ip, device.device_name, isAlive)
                console.log('send notify')
                let sw3850r415 = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Down"
                }
                let data = JSON.stringify(sw3850r415)
                fs.writeFileSync('devicestatus/3850-r415.json', data)
            }
        } else if (isAlive == true) {
            if (device.status == 'Down') {
                let sw3850r415 = { 
                    device_name: device.device_name, 
                    device_ip: device.device_ip,
                    status: "Up"
                }
                let data = JSON.stringify(sw3850r415)
                fs.writeFileSync('devicestatus/3850-r415.json', data)
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
