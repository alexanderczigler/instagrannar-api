'use strict'

const _r = require('rethinkdbdash')
const extend = require('extend')
let r = {}

r.init = options => extend(true, r, _r(options))

module.exports = r
