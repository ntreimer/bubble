const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('in activity GET req.user:', req.user);
  // GET route code here
});

/**
 * POST route template
 */

router.post('/', (req, res) => {
    console.log('in activity POST with:', req.body);
    // const query = `
    // INSERT INTO "activity" (
    //     "user_id" INTEGER,
    //     "description" VARCHAR (2000) NOT NULL,
    //     "type" varchar (30),
    //     "participants" VARCHAR (6),
    //     "free" BOOLEAN,
    //     "link" VARCHAR (2048),
    //     "notes" VARCHAR (2000)
    // )
    // VALUES ($1, $2, $3, $4, $5, $6, $7);
    // `;
    // pool.
    res.send('merp');
  // POST route code here
});



module.exports = router;
