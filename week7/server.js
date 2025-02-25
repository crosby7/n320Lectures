const http = require("http");
const fs = require("fs");
const path = require("path");

const WebFile = require("./functions/webfile");

let serverHits = 0;

function app(req, res) {
  console.log(++serverHits, req.url);

  const reqWebFile = new WebFile(req.url);

  if (fs.existsSync(reqWebFile.reqResource)) {
    res.writeHead(200, { "Content-Type": reqWebFile.getMimeType() });
    res.write(fs.readFileSync(reqWebFile.reqResource));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(fs.readFileSync(path.join(__dirname, "views", "404.html")));
  }

  res.end();
}

const server = http.createServer(app);

const port = process.env.PORT || 5445;

server.listen(port);
console.log(`Server listening on port ${port}`);
console.log(`http://localhost:${port}`);
