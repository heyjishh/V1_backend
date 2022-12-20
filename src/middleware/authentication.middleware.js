'use strict'

const jwt = require("jsonwebtoken");
const { USER } = require("../model/modelIndex");
const { HttpStatusCode } = require( "../enums/statusCodes" );
const { throwError, reqLogger } = require( "../utils/exceptions" );


// const authFunction = async ( req, res, next ) => {
//     try {

//         await reqLogger(req, res, next);
//         console.log("req.headers.authorization", req.headers.authorization)
//         if (req.headers.authorization == undefined) {
//             console.log("req.headers.authorization", req.headers.authorization)
//             return  throwError( "Authentication failed", HttpStatusCode.UNAUTHORIZED );
//         }

//         console.log("req.headers.authorizatiqqqqqqqqqqqqqon", req.headers.authorization)

//         const token = req.headers.authorization.split( " " )[ 1 ];
//         if ( !token ) {
//            return throwError( "Authentication failed", HttpStatusCode.UNAUTHORIZED );
//         }

//         const decodedToken = jwt.verify(token, process.env.JWT_KEY );
//         if ( !decodedToken ) {
//             return throwError( "Authentication failed", HttpStatusCode.UNAUTHORIZED );
//         }

//         console.log("decodedToken", decodedToken)
//         const checkValidToken = await USER.findOne( { _id: decodedToken.userId, token: token } )
//         if ( !checkValidToken ) {
//             return throwError( "Authentication failed", HttpStatusCode.UNAUTHORIZED );
//         }

//         req.user = { email: decodedToken.email, userId: decodedToken.userId };
//         next();
//     } catch (error) {
//         return throwError( "Authentication failed", HttpStatusCode.UNAUTHORIZED , error);
//     }
// }

const authFunction = async (req, res, next) => {
    try {
        await reqLogger(req, res, next);

        if (req.headers.authorization == undefined) {
            return res.status(HttpStatusCode.UNAUTHORIZED).json({success :false ,  status : HttpStatusCode.UNAUTHORIZED , message: "Authentication failed" });
        }

        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(HttpStatusCode.UNAUTHORIZED).json({ success: false, status: HttpStatusCode.UNAUTHORIZED, message: "Authentication failed" });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        if (!decodedToken) {
            return res.status(HttpStatusCode.UNAUTHORIZED).json({ success: false, status: HttpStatusCode.UNAUTHORIZED, message: "Authentication failed" });
        }

        const checkValidToken = await USER.findOne({ _id: decodedToken.userId, token: token })
        if (!checkValidToken) {
            return res.status(HttpStatusCode.UNAUTHORIZED).json({ success: false, status: HttpStatusCode.UNAUTHORIZED, message: "Authentication failed" });
        }

        req.user = { email: decodedToken.email, userId: decodedToken.userId };
        next();

    } catch (error) {
        return throwError( "Authentication failed", HttpStatusCode.UNAUTHORIZED , error);
    }
}

module.exports = { authFunction }
