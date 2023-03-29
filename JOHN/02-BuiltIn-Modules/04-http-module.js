const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.end("Welcome to my serveer");
  } else if (req.url === "/about") {
    res.end("History");
  } else {
    res.end("We can not find what you are looking for");
  }
});

server.listen(5000);

/// nodemon is package for restarting node with change
     