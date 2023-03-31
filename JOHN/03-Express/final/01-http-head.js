const http = require("http");

const server = http.createServer((req, res) => {
  //You can use methods of the req and res objects
  // to read information from the REQUEST
  // and send a RESPONSE back to the client.
  const url = req.url;
  if (url === "/" || url === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    // res.writeHead(): This method is used
    // to write the HTTP response header
    // that will be sent back to the client.
    // It takes two arguments: the status code
    //and an object containing the response headers.
    // In this case, it sets the status code to 200
    // (which means "OK") and sets the content type to "text/html".
    res.write("<h1>Home Page</h1>");
    //res.write(): This method is used to write the response body,
    //which is the actual content that will be sent back to the client.
    //You can call this method multiple times to send a response in parts.
    res.end();
    //res.end(): This method is used to signal the end of the response.
    // After calling this method, no more data can be written to the response.
    // The method takes no arguments
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>ABOUT</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>ERROR</h1>");
    res.end();
  }
});

server.listen(5000);
//server.listen(): This method tells the server
//to start listening for incoming requests on a specific port number.
//It takes a single argument, which is the port number to listen on.
//In this case, it starts the server listening on port 5000.
