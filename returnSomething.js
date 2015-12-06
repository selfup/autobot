'use strict'

const http = require('http')

const url = 'http://idea.selfup.me/api/v1/ideas'

var makeAndReturnRequest = (onEnd) => {
    http.get(url, (res) => {
      let body = ''

      res.on('data', (chunk) => {
      body += chunk
    })

    res.on('end', () => {
      let jsonArray = JSON.parse(body)
      let jsonStuff = jsonArray[0]
      let firstElement = jsonStuff.quality

      printResults(jsonArray, jsonStuff, firstElement)

      jsonArray.forEach(printOutAttributes)
    })
  })
}

var printOutAttributes = (element, index) => {
  console.log(index + " " + element.quality)
}

var printResults = (jsAr, jsSt, fE) => {
  console.log(jsAr)
  console.log(jsSt)
  console.log(fE)
}

makeAndReturnRequest()
