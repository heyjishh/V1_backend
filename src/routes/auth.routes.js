const authRoute = require( 'express' ).Router();
const { login, signUp } = require( '../controller/auth/auth.controller' );
const { authFunction } = require('../middleware/authentication.middleware');
const {reqLogger} = require('../utils/exceptions');


authRoute.post('/auth/login', login );
authRoute.post('/auth/signup', signUp );


module.exports = authRoute
