
const {StatusCodes} = require('http-status-codes')


const {AirplaneService} = require('../services');

const {SuccessResponse,ErrorResponse} = require('../utils/common')

/**
 *  POST: /airplanes
 *  req-body {modelNumber : 'airbus320', capacity: 200}
 * 
 */
 
async function createAirplane(req,res){

        try{

            const airplane = await AirplaneService.createAirplane({
                modelNumber : req.body.modelNumber,
                capacity : req.body.capacity
                  })
                  SuccessResponse.data = airplane
                return res.status(StatusCodes.CREATED)
            .json(SuccessResponse);
          
        }catch(error){
            ErrorResponse.error = error;
            ErrorResponse.message = "Something went wrong while creating airplane"
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)


        }

}


async function getAirplanes(req,res){


    try{
        const airplanes =  await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
         ErrorResponse.error = error;
            ErrorResponse.message = "Something went wrong while creating airplane"
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)

    }

}

async function getAirplane(req,res){


    try{
        const airplanes =  await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplanes
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
         ErrorResponse.error = error;
          ErrorResponse.message = "Can't Find the Airplane"
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)

    }

}


async function destroyAirplane(req,res){


    try{
        const airplanes =  await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplanes
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
         ErrorResponse.error = error;
            ErrorResponse.message = "Something went wrong while Destroying airplane"
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)

    }

}









 module.exports = {
            createAirplane,
            getAirplanes,getAirplane, destroyAirplane
        }