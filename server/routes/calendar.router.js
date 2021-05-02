const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

router.delete('/', rejectUnauthenticated, (req, res) => {
  console.log('in calendar DELETE:', req.body);
  const calendarId = req.body.id;
  const queryString = `DELETE FROM "calendar"
  WHERE "calendar".id = ($1);`;
  pool.query(queryString, [calendarId]).then((response) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log(error);
  })
})

router.get("/", rejectUnauthenticated, (req, res) => {
  console.log("in calendar GET req.user:", req.user);
  let queryString = `SELECT * FROM "activity"
  JOIN "calendar" ON "calendar".activity_id = "activity".id
  WHERE "activity".user_id = ($1);`;
  pool
    .query(queryString, [req.user.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
