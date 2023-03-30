//#################
//We created http server like this before

/* const http = require("http");

const server = http.createServer((req, res) => {
  res.end("server is listening");
});

server.listen(5000);
 */

//#######################
//This time we will create server with event listeners!!

//In event emitter section we create event listener with event class
//and we use functions on that classes like emit and on
//but this time we use server object that extends REQUEST Event
//so because of this we dont need to create new events like before.
//we just use built-in events

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("WELCOME TO THE SERVER");
});

server.listen(5000);
