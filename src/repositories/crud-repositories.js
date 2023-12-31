class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try{
            const response = await this.model.create(data);
            return response;
        }catch(error){
            console.log('Something went wrong in CRUD Repo : create');
            throw error;
        }
    }

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            console.log('Something went wrong in CRUD Repo : destroy');
            throw error;
        }
    }
    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            console.log('Something went wrong in CRUD Repo : get');
            throw error;
        }
    }
    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log('Something went wrong in CRUD Repo : getAll');
            throw error;
        }
    }
    async update(id , data) {
        try {
            const response = await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return response;
        } catch (error) {
            console.log('Something went wrong in CRUD Repo : get');
            throw error;
        }
    }
    
}

module.exports = CrudRepository;