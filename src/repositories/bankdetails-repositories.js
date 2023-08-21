const CrudRepository = require('./crud-repositories');
const { User } = require('../models');


class BankDetailsRepository extends CrudRepository{
    constructor(){
        super(User);
    }
}

module.exports = BankDetailsRepository;