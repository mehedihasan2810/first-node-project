const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 8080;
const hostname = "127.0.0.1";

const readingFile = (res, statusCode, fileName) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    res.writeHead(statusCode, {
      "Content-Type": "text/html",
    });
    res.write(data);
    res.end();
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    readingFile(res, 200, "./pages/index.html");
  } else if (req.url === "/about") {
    readingFile(res, 200, "./pages/about.html");
  } else if (req.url === "/contact") {
    readingFile(res, 200, "./pages/contact.html");
  } else {
    readingFile(res, 404, "./pages/404.html");
  }
});

server.listen(PORT, hostname, () => {
  console.log(`server is running at http://${hostname}:${PORT}`);
});
