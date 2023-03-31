//Middleware refers to functions or pieces of code
// that are executed between the incoming request
// and the outgoing response in a web application.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the rescources");
  res.status(200).send("Home Page");
});

//app.get(path, callback) -
//This method is used to define a route
// that handles HTTP GET requests.
//path is the URL path for the route,
//and callback is a function
//that is executed when the route is accessed.
//the callback function takes two parameters:
//req (the request object)
//and res (the response object).

app.get("/about", (req, res) => {
  res.status(200).send("About");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
  console.log("listening");
});

/* 
Note that res.send() automatically sets 
the appropriate content type based on the type of
data being sent. 

Additionally, res.send() 
automatically ends the response, 
so no other method should be called after it 
in the same middleware function.
 */
