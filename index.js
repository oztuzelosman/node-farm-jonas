const express = require("express");
const app = express();
const logger = require("./JOHN/03-Express/final/08-middleware/logger.js");
//In Express.js, middleware functions can be exported
// as a module using the module.exports statement.

app.use(logger);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
