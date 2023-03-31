//Inside the callback function, this code creates a new read stream for the file at ./content/big.txt.
//The createReadStream method returns a stream that can be used to read data from the file in chunks,
// which is more memory-efficient than reading the entire file into memory at once.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // const text = fs.readFileSync('./content/big.txt', 'utf8')
  // res.end(text)

  const fileStream = fs.createReadStream("./hugetext.txt", "utf-8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => {
    res.end(err);
  });
});

server.listen(5000);

//The open event is emitted when the file stream is opened
// and it signals that the file is ready to be read.
//When this event is triggered,
//the server pipes the file stream into the response object using the pipe() method.
// pipe() method connects the readable stream to a writable stream
//(in this case, the response object) and automatically sends the data
//from the readable stream to the writable stream.

//###

//Overall, using the pipe() method to transfer data from a readable stream to a writable stream is a common practice in Node.js,
//as it simplifies the code and reduces the memory footprint by avoiding buffering the entire file in memory.
