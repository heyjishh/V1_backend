const authRoute = require( 'express' ).Router();
const { login, signUp } = require( '../controller/admin/auth.controller' );
const { midAuth } = require( '../middleware/authentication.middleware' );


authRoute.get( '/auth', midAuth, login );
authRoute.post( '/auth', midAuth, signUp );


module.exports = {authRoute}