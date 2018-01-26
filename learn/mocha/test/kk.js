'use strict';

const assert = require('assert');

describe('User', () => {
  describe('#query', () => {
    it('should query user without error', done => {
      setTimeout(() => {
        var user = { id: 1, name: 'z熊' };
        done(assert.deepEqual(user, { id: 1, name: 'z熊' }));
      }, 50);
    });
  });
});
