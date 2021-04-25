const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// also need axios to get make our API request
const axios = require('axios');


/**
 * GET route
 */
router.get('/', (req, res) => {
    console.log('in boredAPI get router');
    axios.get(`https://www.boredapi.com/api/activity`).then((response) => {
        console.log(response.data);
        res.send(response.data);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});


module.exports = router;
