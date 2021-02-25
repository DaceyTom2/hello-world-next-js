var assert = require('assert');

describe('ArrayPass', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('ArrayFail', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      
      assert.equal([1, 2, 3].indexOf(3), -1);
    });
  });
});