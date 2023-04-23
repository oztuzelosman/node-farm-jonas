const express = require("express");
const app = express();
const { people } = require("./JOHN/03-Express/data.js");

app.use(express.json());

//should get data from people json
app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});

// Route for handling post requests
app.post("/api/people", (req, res) => {
  // Destructure the name and id properties from the request body
  const { id, name } = req.body;

  // If the name property is present, create a new person object with the name and id properties
  if (name) {
    const newPerson = { id, name };
    // Add the new person object to the people array
    people.push(newPerson);
    // Respond with a 201 status code and the new person object in the response body
    res.status(201).json({ success: true, data: newPerson });
  } else {
    // If the name property is not present, respond with a 400 status code and an error message in the response body
    res
      .status(400)
      .json({ success: false, msg: "Please provide a name value." });
  }
});

//listening port 5000
app.listen(5000, () => {
  console.log("listening");
});
