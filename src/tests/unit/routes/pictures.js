var chai = require('chai'),
  expect = chai.expect,
  pictures = require(process.cwd() + '/routes/pictures');

describe('pictures', function () {
  it('has byLocation() function', function () {
    expect(pictures.byLocation).to.be.a('function');
  });
  it('has byId() function', function () {
    expect(pictures.byId).to.be.a('function');
  });
});
