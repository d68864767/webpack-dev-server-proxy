const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

// This function will create a proxy server
function createProxyServer(target) {
  const server = http.createServer(function(req, res) {
    proxy.web(req, res, { target: target });
  });

  console.log("Proxy server has been created and is listening on port 3000");
  server.listen(3000);
}

// This function will handle the proxy server for webpack-dev-server
function handleProxyServer(target) {
  if (!target) {
    console.error("Target for the proxy server is not provided");
    return;
  }

  createProxyServer(target);
}

module.exports = handleProxyServer;
