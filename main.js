const http = require('http')
const url = 'some_url'
const five = require('johnny-five')
const board = new five.Board()

const makeRequest = onEnd => {
  http.get(url, res => {
    let body = ''

    res.on('data', chunk => {
      body += chunk
    })

    res.on('end', () => {
      const responseB = JSON.parse(body)
      onEnd(responseB)
    })
  })
}

board
  .on('error', e => {
    console.log(`Error: ${e}`)
  })
  .on('ready', () => {
    const led = new five.Led(13)

    function run() {
      makeRequest(function(klass) {
        if (responseB.cohort === "Ping") {
          led.blink(6000)
        }
      })
    }

    const second = 1000

    setInterval(run, 15*second)
  })
