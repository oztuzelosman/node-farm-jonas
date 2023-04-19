const express = require("express");
const app = express();

const authorize = require("./JOHN/03-Express/final/08-middleware/authorize-mw.js");
const logger = require("./JOHN/03-Express/final/08-middleware/authorize-mw.js");

app.use([authorize, logger]);

app.get("/", (req, res) => {
  res.status(200).send("Home Page of Site");
});

app.get("/about", (req, res) => {
  res.send("about!");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("items");
});

app.listen(5000, () => {
  console.log(`server is listening `);
});
