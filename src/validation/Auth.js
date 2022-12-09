const joi = require( 'joi' );
const { throwError } = require( '../utils/exceptions' );
const { Auth } = require( '../model/modelIndex' );

const loginJoi = joi.object( {
    email: joi.string().email().required(),
    password: joi.string().min( 6 ).required()
} );

const signUpJoi = joi.object( {
    name: joi.string().min( 3 ).required(),
    email: joi.string().email().required(),
    password: joi.string().min( 6 ).pattern( new RegExp( '^[a-zA-Z0-9]{3,30}$' ) ),
    repeatPassword: joi.ref( 'password' ),
    dob : joi.string().required(),
    address: joi.string().min( 3 ).required(),
    phone: joi.string().min( 10 ).required(),
    role: joi.string().min(3).required().valid(  'admin', 'user' ),
    status: joi.string().min( 3 ).required().valid(  'active', 'inactive' ),
} );

module.exports = {
    loginJoi,
    signUpJoi
}
