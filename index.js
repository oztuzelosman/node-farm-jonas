//////////////////////
///////FILE

//### SYNCHRONOUS WAY

/* const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(textIn);

const textOut = `This is written by node.js\n ${textIn}. \nCreated on ${Date.now()}`;

const written = fs.writeFileSync("./txt/input.txt", textOut);

console.log(written);
 */

//### ASYNCHRONOUS WAY
/* 

const fs = require("fs");

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR!!");

  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    if (err) return console.log("ERROR2!!");
    console.log(data2);

    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("your file has been written.");
      });
    });
  });
});
 */

/////////////////////////////
/////////SERVER

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/overview") {
    res.end("Hello from server");
  } else if (pathName === "/product") {
    res.end("Hello from node");
  } else {
    res.end("Hey NODE!!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening");
});

/* const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("hello from server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening");
});
 */
