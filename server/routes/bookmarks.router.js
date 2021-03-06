const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

router.get("/", rejectUnauthenticated, (req, res) => {
  console.log("in activity GET req.user:", req.user);
  let queryString = `SELECT * FROM "activity"
  WHERE "activity".user_id = ($1)
  ORDER BY id DESC;`;
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
