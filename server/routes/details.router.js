const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

router.put("/", rejectUnauthenticated, (req, res) => {
  console.log("in details PUT req.body:", req.body);
  const activityId = req.body.details.id;
  const notes = req.body.notes;
  let queryString = `UPDATE "activity"
  SET "notes" = ($1)
  WHERE "activity".id = ($2);`;
  pool
    .query(queryString, [notes, activityId])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.delete("/", rejectUnauthenticated, (req, res) => {
    console.log("in details DELETE req.body:", req.body);
    const activityId = req.body.id;
    const queryString = `DELETE FROM "activity"
    WHERE "activity".id = ($1);`;
    pool
      .query(queryString, [activityId])
      .then((response) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  });

module.exports = router;
