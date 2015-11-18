'use strict'

var chai = require('chai')
var expect = chai.expect
var sinon = require('sinon')
var proxyquire = require('proxyquire')

chai.use(require('sinon-chai'))

var request = sinon.stub()

var instagramClient = proxyquire(process.cwd() + '/lib/instagramClient', {
  'request': request
})

describe('instagramClient module', function () {
  it('has request() function', function () {
    expect(instagramClient.request).to.be.a('function')
  })
  it('calls request', function () {
    instagramClient.request()
    expect(request).calledOnce
  })
})
