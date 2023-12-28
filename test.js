const assert = require('assert');
const handleProxyServer = require('./index');

describe('handleProxyServer', function() {
  it('should throw an error when target is not provided', function() {
    assert.throws(() => handleProxyServer(), Error, "Target for the proxy server is not provided");
  });

  it('should not throw an error when target is provided', function() {
    assert.doesNotThrow(() => handleProxyServer('http://localhost:8080'));
  });
});
