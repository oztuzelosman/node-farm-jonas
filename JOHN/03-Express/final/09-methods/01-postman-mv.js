const express = require("express");
const app = express();
const { people } = require("./JOHN/03-Express/data.js");

//static assets
//app.use(express.static("./JOHN/03-Express/methods-public"));

//middleware
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

//fetching all data from people
app.get("/login", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
//acting on whether post request made

app.post("/login", (req, res) => {
  const { name, id } = req.body;
  if (name) {
    return res
      .status(200)
      .json({ success: true, data: [...people, { id, name }] });
  } else {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
});

//listening port
app.listen(5000, () => {
  console.log("listening");
});
