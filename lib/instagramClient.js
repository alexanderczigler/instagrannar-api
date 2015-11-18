'use strict'

var request = require('request')

module.exports = {
  request: function (host, callback) {
    request({
      url: host,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(body)
        return
      }

      var errObject = {
        message: 'Error when accessing Instagram.'
      }

      if (error) {
        errObject.error = error
        console.log('Error in instagramClient.request()', error)
      }

      if (response) {
        errObject.statusCode = response.statusCode
        console.log('Error in instagramClient.request()', response.statusCode)
      }

      callback(errObject)
    })
  }
}
