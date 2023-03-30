const EventEmitter = require("events");

//we are creating a events class called event emitter here
//and after that we are using functions in that classes like on and emit
const customEmitter = new EventEmitter();
//on function creates an event listener.
customEmitter.on("response", (userName, age) => {
  console.log(`username is:${userName} and age is:${age}`);
});
//we can pass more than one instance to same event
customEmitter.on("response", () => {
  console.log("event is called");
});
// emit function calls and start the event that we create
//###   customEmitter.emit("response");
//we can pass arguments to the event functions
customEmitter.emit("response", "osman", 30);
