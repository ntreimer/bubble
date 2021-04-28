const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("in activity GET req.user:", req.user);
  // GET route code here
});

router.post("/bookmark", (req, res) => {
  console.log("in activity/bookmark POST with:", req.body, req.user);
  const activity = req.body.activity;
  if (activity.price === 0) {
    activity.price = true;
  } else {
    activity.price = false;
  }
  const queryString = `
    INSERT INTO "activity" (
        "user_id",
        "description",
        "type",
        "participants",
        "free",
        "link" 
    )
    VALUES ($1, $2, $3, $4, $5, $6);
    `;
  pool
    .query(queryString, [
      req.user.id,
      activity.activity,
      activity.type,
      activity.participants,
      activity.price,
      activity.link,
    ])
    .then((response) => {
      console.log(response);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post("/calendar", (req, res) => {
  console.log("in activity/calendar POST with:", req.body, req.user);
  const activity = req.body.activity;
  cobs
  if (activity.price === 0) {
    activity.price = true;
  } else {
    activity.price = false;
  }
  const queryString = `
    INSERT INTO "activity" (
        "user_id",
        "description",
        "type",
        "participants",
        "free",
        "link" 
    )
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;
    `;
  pool
    .query(queryString, [
      req.user.id,
      activity.activity,
      activity.type,
      activity.participants,
      activity.price,
      activity.link,
    ])
    .then((response) => {
      console.log("back from bookmark with id:", response.rows[0].id);
      const activityId = response.rows[0].id;
      const calendaryQuery = `
      INSERT INTO "calendar" (
          "activity_id",
          "date"
        )
        VALUES ($1, $2)
      `;
      pool
        .query(calendaryQuery, [activityId, req.body.date])
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
