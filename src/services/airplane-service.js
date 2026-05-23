
const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories')

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){

    try{

        const airplane = await airplaneRepository.create(data);
        return airplane;

    }catch(error){
        throw error;
    }

}

module.exports = {
    createAirplane
}


async function getAirplane(){

    try{

        const airplanes = await airplaneRepository.getAll()
        return airplanes;

    }catch(err){

        throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)

    }


}


module.exports = {
    getAirplane,createAirplane
}