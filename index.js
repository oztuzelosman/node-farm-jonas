const express = require("express");
const app = express();
const { people } = require("./JOHN/03-Express/data.js");

app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});

app.post("/api/people", (req, res) => {
  const { id, name } = req.body;

  if (name) {
    const newPerson = { id, name };
    people.push(newPerson);
    res.status(201).json({ success: true, data: newPerson });
  } else {
    res
      .status(400)
      .json({ success: false, msg: "Please provide a name value." });
  }
});

app.put("/api/people/:personId", (req, res) => {
  const { personId } = req.params;
  const { name } = req.body;

  const personIndex = people.findIndex((person) => {
    return person.id === Number(personId);
  });

  if (personIndex === -1) {
    return res
      .status(404)
      .json({ success: false, msg: "can not found the data" });
  }
  let updatedPerson = { ...people[personIndex], name };
  people[personIndex] = updatedPerson;
  res.status(200).json({ success: true, data: updatedPerson });
});

app.listen(5000, () => {
  console.log("listening");
});
