'use strict'

/*
require('./lib/adapters/db').init({
  host: '192.168.99.100',
  port: 28015,
  db: 'instagrannar',
  discovery: false
})
*/

var http = require('http')
var express = require('express')
var pictures = require('./lib/routes/pictures.js')

var app = express()
app.set('port', process.env.PORT || 3000)

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.options(/(.*)/, function (req, res, next) {
  res.send(200) // Always respond OK on OPTIONS requests.
})

app.get('/pictures', pictures.byLocation)
app.get('/pictures/:id/:accesstoken', pictures.byId)

http.createServer(app).listen(app.get('port'), function () {
  console.log('Instagrannar API listening on port ' + app.get('port'))
})
