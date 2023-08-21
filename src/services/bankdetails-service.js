const {BankDetailsRepository} = require('../repositories')


const bankdetailsRepository = new BankDetailsRepository();

async function createBankDetail(data){
    try{
        const details = await bankdetailsRepository.create(data);
        return details;
    }catch(error){
        throw error;
    }
}

module.exports = {
    createBankDetail
}