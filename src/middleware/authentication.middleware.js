const authFunction = async ( req, res, next ) => {
    try {
        const token = req.headers.authorization.split( " " )[ 1 ];
        if ( !token ) {
            return res.status( 401 ).json( {
                success: false,
                status: 401,
                message: "Authentication failed"
            } );
        }
        const decodedToken = jwt.verify( token, process.env.JWT_KEY );
        if ( !decodedToken ) {
            return res.status( 401 ).json( {
                success: false,
                status: 401,
                message: "Authentication failed"
            } );
        }
        const checkValidToken = await Auth.findOne( { _id: decodedToken.userId, token: token } )
        if ( !checkValidToken ) {
            return res.status( 401 ).json( {
                success: false,
                status: 401,
                message: "Authentication failed"
            } );
        }
        req.user = { email: decodedToken.email, userId: decodedToken.userId };
        next();
    } catch (error) {
        return res.status( 401 ).json( {
            success: false,
            status: 401,
            message: "Authentication failed"
        } );
    }
}

module.exports = { authFunction } 