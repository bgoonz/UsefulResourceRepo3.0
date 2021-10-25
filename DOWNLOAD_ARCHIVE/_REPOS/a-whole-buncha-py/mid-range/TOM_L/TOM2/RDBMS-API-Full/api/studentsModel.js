const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

// endpoint routes

// create student - post endpoint

router.post("/", (req, res) => {
  const student = req.body;

  // Requre Name
  if (!req.body.name) {
    return res.status(400).json({ msg: "you must provide a name" });
  }

  // perform insert
  db.insert(student)
    .into("students")
    .then(newStudents => {
      res.status(201).json(newStudents);
    })
    .catch(err => res.status(500).json(err));
});

// get students = get endpoint
router.get("/", (req, res) => {
  db("students")
    .then(students => {
      res.status(200).json(students);
    })
    .catch(err => res.status(500).json(err));
});

// get single student based upon id - get single student endpiont
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("students")
    .where({ id })
    .then(student => {
      res.status(200).json(student);
    })
    .catch(err => res.status(500).json(err));
});

// put endpoint for student to update a student based upon id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  //Require Name
  if (!req.body.name) {
    return res.status(400).json({ msg: "you must provide a name" });
  }

  db("students")
    .where({ id: id })
    .update(updates)
    .then(currentStudent => {
      res.status(200).json(currentStudent);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
// delete a student based upon id - delete student endpoint
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("students")
    .where({ id: id })
    .del()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
