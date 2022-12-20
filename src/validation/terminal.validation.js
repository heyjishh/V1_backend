const joi = require('joi');
const { logger } = require('../utils/logger');
const STATUS_MSG = require('../enums/statusCodes');


const createCompanyTerminalValidation = async (req, res, next) => {
    try {
        const schema = joi.object({
            terminalName: joi.string().required(),
            terminalAddress: joi.string().required(),
            terminalPhone: joi.string().required(),
            terminalLocation: joi.string().required(),
            terminalStatus: joi.string().required(),
            terminalCreatedBy: joi.string().required(),
            terminalUpdatedBy: joi.string().required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(STATUS_MSG.ERROR).json({
                status: STATUS_MSG.ERROR,
                message: error.details[0].message
            });
        }
        next();
    } catch (error) {
        logger.error(error);
    }
};
