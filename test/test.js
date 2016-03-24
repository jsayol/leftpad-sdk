var assert = require('assert')
var leftpad = require('../')

describe('Test left padding via left-pad.io', function() {
  describe('With callback', function() {
    it('should return "@@@@hello"', function(done) {
      leftpad("hello", 9, "@", function(ret) {
        assert.equal("@@@@hello", ret.body.str)
        done()
      })
    });
  });

  describe('With promises', function() {
    it('should return "#####hello"', function() {
      return leftpad("hello", 10, "#").then(function(ret) {
        assert.equal("#####hello", ret.body.str)
      })
    });
  });
});
