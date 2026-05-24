
const { StatusCodes } = require('http-status-codes');
const { CityRepository } = require('../repositories')

const cityRepository = new CityRepository();

async function createCity(data) {

    try{

        const city = await cityRepository.create(data);
        return city;

    }catch(error){
        if(error.name == 'SequelizeUniqueConstraintError'){
                throw error;
        }
        throw error;
    }


    
}


module.exports = {
    createCity
}
