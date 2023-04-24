const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPeople,
  updatePerson,
  deletePerson,
} = require("../controllers/routerController");

router.get("/", getPeople);

router.post("/", createPeople);

router.put("/:updateId", updatePerson);

router.delete("/:deleteId", deletePerson);

module.exports = router;
