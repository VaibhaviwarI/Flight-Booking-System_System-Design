const {StatusCodes} = require('http-status-codes')

const {CityService} = require('../services')
const {SuccessResponse,ErrorResponse} = require('../utils/common')



/**
 ** POST : / cities
  * *  req-body = {name : "London"}
 *
 */
async function createCity(req,res){

        try{

            const city= await CityService.createCity({
              name : req.body.name
                  })
                  SuccessResponse.data = city
                return res.status(StatusCodes.CREATED)
            .json(SuccessResponse);
          
        }catch(error){
            ErrorResponse.error = error;
            ErrorResponse.message = "Something went wrong while creating the city"
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)


        }

}



async function  deleteCity(req,res){

    try{

        const response = await CityService.deleteCity(req.params.id);

        return res.status(StatusCodes.ACCEPTED).json({
            msg : "City destroyed Successfully",
            success : true
        })
    }catch(error){
       
        return res.status(StatusCodes.BAD_REQUEST).json({
            msg : "Error in deleting the city",
            success : false
        })

    }

}

module.exports = {
    createCity, deleteCity
}