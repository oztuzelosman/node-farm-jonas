const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./JOHN/03-Express/methods-public/"));

/* 
In Express, app.use() is a method that allows you to add 
middleware functions to your application's request-response
cycle. Middleware functions are functions that have access
to the request object (req), the response object (res),
and the next middleware function 
in the application's request-response cycle.
*/
/* 
express.static is a built-in middleware function
in Express that is used to serve static files
such as images, CSS files, and JavaScript files. 
It takes one argument, which is the name of the directory
that contains the static resources.
*/

app.get("/", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./JOHN/03-Express/methods-public/index.html")
  );
});

/* 
res.sendFile() is an Express.js method that sends a file
to the client. It sets the appropriate headers 
indicating the content type and attachment disposition of
the response, and transfers the file as the response body.
*/
/* 
path.resolve() is a method provided by the built-in Node.js
path module that resolves a sequence of paths or path segments
into an absolute path. It returns a string that represents
the absolute path.
*/
/* 
__dirname is a global variable in Node.js that represents
the current directory of the module in which it is used.
It gives the absolute path of the directory 
containing the currently executing file. 
 */

app.all("*", (req, res) => {
  res.status(404).send("page error");
});

app.listen(5000, () => {
  console.log("listening");
});
