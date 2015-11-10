process.env.NODE_ENV = 'test';

var mocha = require('mocha');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app.js');

var should = chai.should();
chai.use(chaiHttp);

describe('server router', function () {
  it('should return...', function (done) {
    chai.request(server)
    .get('/')
    .end(function (err, res) {
      console.log(res.text);
      res.should.have.status(200);
      res.text.should.include('Welcome to Express');
      res.text.should.have.string('<h1>Express</h1>');
      res.text.should.have.string('<p>Welcome to Express</p>');
      done();
    });
  });
});

