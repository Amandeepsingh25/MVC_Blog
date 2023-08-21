const express = require('express');

const bankdetailsroutes = require('./bankdetails-routes');

const router = express.Router();

router.use('/bankdetails',bankdetailsroutes);


module.exports = router;