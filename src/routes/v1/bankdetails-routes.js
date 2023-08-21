const express = require('express');

const {BankDetailController} = require('../../controller');
const router = express.Router();


router.post('/',BankDetailController.createBankDetail);


module.exports = router;