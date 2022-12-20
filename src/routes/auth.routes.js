const authRoute = require( 'express' ).Router();
const { login, signUp } = require( '../controller/index' );
const { authFunction } = require('../middleware/authentication.middleware');
const { reqLogger } = require('../utils/exceptions');



authRoute.post('/auth/login',reqLogger, login );
authRoute.post('/auth/signup', reqLogger, signUp );


module.exports = authRoute
