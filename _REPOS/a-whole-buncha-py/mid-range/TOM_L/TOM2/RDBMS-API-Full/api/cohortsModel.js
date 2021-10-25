const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

// endpoint routes

// create cohort - post endpoint

router.post("/", (req, res) => {
  const cohort = req.body;

  // Requre Name
  if (!req.body.name) {
    return res.status(400).json({ msg: "you must provide a name" });
  }

  // perform insert
  db.insert(cohort)
    .into("cohorts")
    .then(newCohorts => {
      res.status(201).json(newCohorts);
    })
    .catch(err => res.status(500).json(err));
});

// get cohorts = get endpoint
router.get("/", (req, res) => {
  db("cohorts")
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(err => res.status(500).json(err));
});

// get single cohort based upon id - get single cohort endpiont
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("cohorts")
    .where({ id })
    .then(cohort => {
      res.status(200).json(cohort);
    })
    .catch(err => res.status(500).json(err));
});

// get all students of a cohort using id (cross table get using id and subroute of students) - get all students from cohort endpoint
router.get("/:id/students", (req, res) => {
  const { id } = req.params;
  db("students")
    .where({ cohort_id: id })
    .then(currentStudents => {
      res.status(200).json(currentStudents);
    })
    .catch(err => res.status(500).json(err));
});

// put endpoint for cohort to update a cohort based upon id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  //Require Name
  if (!req.body.name) {
    return res.status(400).json({ msg: "you must provide a name" });
  }

  db("cohorts")
    .where({ id: id })
    .update(updates)
    .then(currentCohort => {
      res.status(200).json(currentCohort);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
// delete a cohort based upon id - delete cohort endpoint
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("cohorts")
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
