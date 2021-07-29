'use strict';
const assert = require('assert');

// 注意: beforeEach 之类的，等待的超时 时间是 2000ms
// 可以通过 this.timeout() 来配置超时时间
describe('Promise test', function() {
  this.timeout(300);

  beforeEach(() => {
    return new Promise(resolve => {
      setTimeout(resolve, 200);
    });
  });

  describe('#query', () => {
    it('response with 1', () => {
      var result = 1;
      assert.equal(result, 1);
    });
  });
});
