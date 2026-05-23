
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


async function getAirplanes(){

    try{

        const airplanes = await airplaneRepository.getAll()
        return airplanes;

    }catch(err){

        throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)

    }


}


async function getAirplane(id) {

    try{

        const airplane = await airplaneRepository.get(id);

        return airplane        

    }catch(error){
        if(error.StatusCodes == StatusCodes.NOT_FOUND){
            throw new AppError('The requested Airplanes not found')
        }
         throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
    
}


async function destroyAirplane(id) {

      try{

        const airplanes = await airplaneRepository.destroy(id);
        return airplanes;

    }catch(err){

        if(error.S )

        throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)

    }

    
}


module.exports = {
    getAirplanes,createAirplane,getAirplane,destroyAirplane
}