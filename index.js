const express = require("express");
const app = express();
const router_people = require("./JOHN/03-Express/final/10-expressRouters/routers/routerPeople.js");

app.use(express.json());
app.use("/api/people", router_people);

app.listen(5000, () => {
  console.log("listening");
});
