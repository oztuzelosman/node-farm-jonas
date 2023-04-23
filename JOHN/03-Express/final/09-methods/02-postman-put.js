const express = require("express");
const app = express();
const { people } = require("./JOHN/03-Express/data.js");

app.use(express.json());

//should get data from people json
app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});

//updating values
// PUT request handler for updating a person by ID
app.put("/api/people/:personId", (req, res) => {
  // Destructure the personId parameter from the request URL
  const { personId } = req.params;
  // Destructure the name property from the request body
  const { name } = req.body;
  // Use the findIndex() method to get the index of the person object
  // with the matching ID

  const personIndex = people.findIndex((person) => {
    return person.id === Number(personId);
  });

  // If the person is not found, return an error response with a 404 status code
  if (personIndex === -1) {
    return res
      .status(404)
      .json({ success: false, msg: "can not found the data" });
  }
  // Update the name property of the person object using the spread syntax
  let updatedPerson = { ...people[personIndex], name };
  // Update the person object in the people array
  people[personIndex] = updatedPerson;
  // Return a success response with a 200 status code
  //and the updated person object
  res.status(200).json({ success: true, data: updatedPerson });
});

//listening port 5000
app.listen(5000, () => {
  console.log("listening");
});
