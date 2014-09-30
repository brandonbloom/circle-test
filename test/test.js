var assert = require("assert")
var execSync = require('exec-sync'); // because I'm lazy

execSync('mkdir build-blah/');
execSync('touch build-blah/abc');

execSync('mkdir ~/home-blah');
execSync('touch ~/home-blah/xyz');

execSync('touch file-blah');

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(2));
    })
  })
})
