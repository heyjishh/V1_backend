const joi = require( 'joi' );
const { throwError } = require( '../../utils/exceptions.js' );
const { Auth } = require( '../../model/modelIndex.js' );

const loginJoi = joi.object( {
    email: joi.string().email().required(),
    password: joi.string().min( 6 ).required()
} );

const signUpJoi = joi.object( {
    name: joi.string().min( 3 ).required(),
    email: joi.string().email().required(),
    password: joi.string().min( 6 ).pattern( new RegExp( '^[a-zA-Z0-9]{3,30}$' ) ),
    repeatPassword: joi.ref( 'password' ),
    dob : joi.date().required(),
    address: joi.string().min( 3 ).required(),
    phone: joi.string().min( 10 ).required(),
    role: joi.string().min( 3 ).required().enum( [ 'admin', 'user' ] ),
    status: joi.string().min( 3 ).required().enum( [ 'active', 'inactive' ] )
} );


module.exports = {
    loginJoi,
    signUpJoi
}