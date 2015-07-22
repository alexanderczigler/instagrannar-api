var chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon'),
  proxyquire = require('proxyquire');

chai.use(require('sinon-chai'));

var request = sinon.stub();

var instagramClient = proxyquire(process.cwd() + '/instagramClient', {
  'request': request
});

describe('instagramClient module', function () {
  it('has request() function', function () {
    expect(instagramClient.request).to.be.a('function');
  });
  it('calls request', function () {
    instagramClient.request();
    expect(request).calledOnce;
  });
});
