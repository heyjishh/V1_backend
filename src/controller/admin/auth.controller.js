const { Auth } = require('../../model/modelIndex');
const { throwError } = require( "../../utils/exceptions" );
const { HttpStatusCode } = require( "../../enums/statusCodes" )
const { loginService, signUpService } = '../../service/auth.service'


const login = async ( req, res ) => {
    try {
        const { email, password } = req.body;

        if ( !email || !password ) {
            return throwError( "Please enter all fields", HttpStatusCode.BAD_REQUEST );
        }

        const data = {
            email: email,
            password: password
        }

        const result = await loginService( data );
        return res.status( HttpStatusCode.OK ).json( result );

    } catch (error) {
        return throwError("Something went wrong!!" ,HttpStatusCode.BAD_GATEWAY, error)
    }
}

const signUp = async ( req, res ) => {
    try { 
        const { name, email, password, address, dob, phone, role, status, repeatPassword } = req.body;

        if ( !name || !email || !password || !address || !dob || !phone || !role || !status || !repeatPassword ) {
            return throwError( "Please enter all fields", HttpStatusCode.BAD_REQUEST );
        }

        const data = { name, email, password, address, dob, phone, role, status, repeatPassword }

        const result = await signUpService( data );
        return res.status( HttpStatusCode.CREATED).json( result );
        
    } catch (error) {
      return throwError("Something went wrong!!" ,HttpStatusCode.BAD_GATEWAY, error)
    }
}