
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


async function deleteCity(cityId){

    const city = await cityRepository.get(cityId);

    if(!city){
        throw new Error("City not found")
    }

    const deleted = await cityRepository.destroy(cityId);

    return deleted;

   
}


module.exports = {
    createCity, deleteCity
}
