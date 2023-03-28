//ROUTER AND API WITH LOADING DATA ONCE FILESYNC

const fs = require("fs");
const url = require("url");
const http = require("http");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
//const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("Hello Overview");
  } else if (pathName === "/product") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>Not Found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening");
});
