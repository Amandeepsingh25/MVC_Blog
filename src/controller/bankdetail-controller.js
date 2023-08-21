
const{ BankDetailService } = require('../services');
const { StatusCodes } = require('http-status-codes')

async function createBankDetail(req,res){
    try{
        const details = await BankDetailService.createBankDetail({
            name: req.body.name,
            balance: req.body.balance
        });
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully created Bankdetails for a user',
                    data: details,
                    error: {}
                });
    }catch(error){
            return res
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({
                        success: false,
                        message: 'Something went wrong while creating Bankdetails for a user',
                        data: {},
                        error:error
                    });
    }
}

module.exports = {
    createBankDetail
}