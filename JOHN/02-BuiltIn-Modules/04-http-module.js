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

/*  The req object in Node.js represents the incoming HTTP request
 made to a server. Some of the most important methods of the req 
 object are:

### req.url: This property contains the requested URL string. 
You can use it to determine what action
to take in response to the request.

### req.method: This property contains the HTTP method used for 
the request, such as "GET", "POST", "PUT", "DELETE", etc. 
You can use it to handle different types of requests differently.

### req.headers: This property contains an object representing
 the HTTP headers of the request. You can access individual 
 headers using the header name as the key of the object.

### req.params: This property is used to extract parameters 
from the URL path. For example, if the URL is "/users/123", 
you can use req.params.id to get the value "123".

### req.query: This property is used to extract query string parameters
 from the URL. For example, if the URL is "/search?q=term",
  you can use req.query.q to get the value "term".

### req.body: This property contains the request body, if any. 
It's usually used with POST and PUT requests to send data to the server.

### req.cookies: This property contains cookies sent with the request.
 You can access individual cookies using the cookie name
  as the key of the object.

These are just a few examples of the methods and properties available 
on the req object in Node.js. The specific methods you'll need will 
depend on the requirements of your application. */
