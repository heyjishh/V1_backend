const joi = require('joi');

const usersByIdJoi = joi.object({
    id : joi.number().integer().min(1).required()
});


module.exports = {
    usersByIdJoi
}
