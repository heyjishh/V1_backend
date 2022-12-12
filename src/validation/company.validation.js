const joi = require( 'joi' );

const companyJoi = joi.object( {
    companyName: joi.string().min( 3 ).required(),
    companyAddress: joi.string().min( 3 ).required(),
    companyPhone: joi.string().min( 10 ).required(),
    companyLogo: joi.string().min( 3 ).optional(),
    companyLocation: joi.string().min( 3 ).required(),
    companyWebsite: joi.string().min( 3 ).optional(),
    companyDescription: joi.string().min( 3 ).optional(),
    companyType: joi.string().min( 3 ).required().valid( 'public', 'private' ),
    companyEmail: joi.string().min( 3 ).required(),
    companyStatus: joi.string().min( 3 ).required().valid( 'active', 'inactive' ),
} );

module.exports = {
    companyJoi
}