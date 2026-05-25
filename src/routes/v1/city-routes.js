
const express = require('express')

const { CityController} = require('../../controllers');
const {CityMiddlewares} = require('../../middlewares')

const router = express.Router();

//api/v1/cities POST
router.post('/',CityMiddlewares.validateCreateRequest
    , CityController.createCity );

// /api/v1/cities/:id DELETE
router.delete('/:id',CityMiddlewares.validateDeleteRequest, CityController.deleteCity);



module.exports = router;


//H.W => Implement update city api and delete city api
