// Built-ins
const http = require("http");
const fs = require("fs");
const path = require("path");

// Class imports
const WebFile = require("./functions/webfile");

// Request handler
/**
 *
 * @param {http.ClientRequest} req
 * @param {http.ServerResponse} res
 */
function app(req, res) {
  const fileReq = new WebFile(req.url);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Welcome to my server</h1>");
  res.end();
}

// Create server
const server = http.createServer(app);

// Listen on port 5445
const port = process.env.PORT || 5445;
server.listen(port);
