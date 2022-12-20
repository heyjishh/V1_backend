const Joi = require('joi');

const allPaginationsJoi = Joi.object({
    page: Joi.number().integer().min(1),
    limit: Joi.number().integer().min(1)
})

module.exports = {
    allPaginationsJoi
}
