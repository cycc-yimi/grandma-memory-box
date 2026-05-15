const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const port = 8765;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8"
};

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://localhost:${port}`);
  const requestPath = decodeURIComponent(url.pathname);
  const filePath = path.join(root, requestPath === "/" ? "index.html" : requestPath);

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream"
    });
    response.end(content);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Preview ready at http://127.0.0.1:${port}`);
});
