const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const text = fs.readFileSync(
    "./JOHN/02-BuiltIn-Modules/07-streams/hugetext.txt",
    "utf-8"
  );
  res.end(text);
});

server.listen(5000);
