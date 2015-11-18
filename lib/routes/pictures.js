'use strict'

var config = require('../../ingr.config.json')
var instagramClient = require('../instagramClient')

module.exports = {
  byLocation: (req, res, next) => {
    if (!req.query) {
      res.end('queryParametersMissing')
      return
    }

    var clientId = config.api.client_id
    var url = 'https://api.instagram.com/v1/media/search'
    var minTs = req.query.min_ts
    var maxTs = req.query.max_ts
    var accessToken = req.query.access_token

    res.setHeader('Content-Type', 'application/json')

    var host = `${url}?client_id=${clientId}&lat=${req.query.lat}&lng=${req.query.lng}&distance=${req.query.dst}`

    if (accessToken) {
      if (accessToken !== '-') {
        host = `${host}&access_token=${accessToken}` // &access_token=' + accessToken
      }
    }

    if (minTs && maxTs) {
      host = `${host}&min_timestamp=${minTs}`
      host = `${host}&max_timestamp=${maxTs}`
    }

    try {
      instagramClient.request(host, function (data) {
        res.send(data)
      })
    } catch (e) {
      console.log(e)
      res.end('error')
    }
  },
  byId: (req, res, next) => {
    if (!req.params) {
      res.end('queryParametersMissing')
      return
    }

    res.setHeader('Content-Type', 'application/json')

    var host = 'https://api.instagram.com/v1/media/{id}?client_id={client_id}'

    if (req.params.accesstoken) {
      if (req.params.accesstoken !== '-') {
        host += '&access_token=' + req.params.accesstoken
      }
    }

    host = host.replace('{client_id}', config.api.client_id)
    host = host.replace('{id}', req.params.id)

    try {
      instagramClient.request(host, function (data) {
        res.send(data)
      })
    } catch (e) {
      console.log(e)
      res.end('error')
    }
  }
}
