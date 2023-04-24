const { people } = require("../../../data");

const getPeople = (req, res) => {
  res.status(200).json(people);
};

const createPeople = (req, res) => {
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
};

const updatePerson = (req, res) => {
  const { updateId } = req.params;
  const { name } = req.body;

  const updateIndex = people.findIndex((person) => {
    return person.id === Number(updateId);
  });

  if (updateIndex === -1) {
    return res
      .status(404)
      .json({ success: false, msg: "can not found the data" });
  }
  let updatedPerson = { ...people[updateIndex], name };
  people[updateIndex] = updatedPerson;
  res.status(200).json({ success: true, data: updatedPerson });
};

const deletePerson = (req, res) => {
  const { deleteId } = req.params;

  let deleteIndex = people.findIndex((person) => {
    return person.id === Number(deleteId);
  });

  if (deleteIndex === -1) {
    return res.status(404).send("no such person");
  }
  const newPeople = people.filter((person) => {
    return person.id !== Number(deleteId);
  });
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPeople,
  updatePerson,
  deletePerson,
};
