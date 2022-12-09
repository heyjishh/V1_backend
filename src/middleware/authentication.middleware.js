const jwt = require( "jsonwebtoken" );
const { USER } = require( "../model/modelIndex" );
const { HttpStatusCode } = require( "../enums/statusCodes" );
const { throwError, reqLogger } = require( "../utils/exceptions" );


const authFunction = async ( req, res, next ) => {
    try {
        const token = req.headers.authorization.split( " " )[ 1 ];
        if ( !token ) {
           return throwError( "Authentication failed", HttpStatusCode.UNAUTHORIZED );
        }

        const decodedToken = jwt.verify( token, process.env.JWT_KEY );
        if ( !decodedToken ) {
            return throwError( "Authentication failed", HttpStatusCode.UNAUTHORIZED );
        }

        const checkValidToken = await USER.findOne( { _id: decodedToken.userId, token: token } )
        if ( !checkValidToken ) {
            return throwError( "Authentication failed", HttpStatusCode.UNAUTHORIZED );
        }

        req.user = { email: decodedToken.email, userId: decodedToken.userId };
        next();
    } catch (error) {
        return throwError( "Authentication failed", HttpStatusCode.UNAUTHORIZED , error);
    }
}



module.exports = { authFunction }
