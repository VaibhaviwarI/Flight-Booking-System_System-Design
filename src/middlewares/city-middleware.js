const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

function validateCreateRequest(req, res, next) {

    if (!req.body.name) {

        ErrorResponse.message =
            "Something went wrong while creating the city";

        ErrorResponse.error = {
            explanation: "name not found in incoming request"
        };

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    next();
}

function validateDeleteRequest(req, res, next) {

    if (!req.params.id) {

        ErrorResponse.message =
            "Something went wrong while deleting the city";

        ErrorResponse.error = {
            explanation: "id not found in incoming request"
        };

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateCreateRequest,
    validateDeleteRequest
};