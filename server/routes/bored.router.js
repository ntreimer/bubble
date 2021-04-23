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

// connect to the .env
require('dotenv').config();

/**
 * GET route template
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
