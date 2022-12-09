const bcrypt = require( "bcryptjs" );
const jwt = require( "jsonwebtoken" );
const { HttpStatusCode } = require( "../enums/statusCodes" );
const { log, throwError } = require( "../utils/exceptions" );
const { loginJoi, signUpJoi } = require( "../validation/Auth" );

const salt = bcrypt.genSaltSync( 10 );


const loginService = async ( data ) => {
    try {
        await loginJoi.validateAsync( data );

        const email = data.email;
        const password = data.password;

        const user = await Auth.findOne( { email } );
        if ( !user ) {
            throwError( "User does not exist", HttpStatusCode.NOT_FOUND );
        }
       
        const isMatch = await bcrypt.compare( password, user.password );
        if ( !isMatch ) { 
            throwError( "Invalid credentials", HttpStatusCode.UNAUTHORIZED );
        }
       
        const token = jwt.sign( { email: user.email, userId: user._id }, process.env.JWT_KEY, { expiresIn: "4h" } );
        await Auth.updateOne( { _id: user._id }, { $set: { token: token } } );

        return {token , userId: user._id , success: true, status: HttpStatusCode.OK, message: "Login successful"}

    } catch (error) {
        return throwError( "Something went wrong!!",HttpStatusCode.BAD_GATEWAY, error  );
    }
    
}

const signUpService = async ( data ) => {
    try {
        await signUpJoi.validateAsync( data );

        const { name, email, password, address, dob, phone, role, status, repeatPassword } = data;

        if ( password !== repeatPassword ) {
            throwError( "Passwords do not match", HttpStatusCode.BAD_REQUEST );
        }

        const user = await Auth.findOne( { email } );
        if ( user ) {
            throwError( "User already exists", HttpStatusCode.CONFLICT );
        }

        const hashedPassword = await bcrypt.hash( password, salt );

        const newUser = await new Auth( {
            name,
            email,
            password: hashedPassword,
            address,
            dob,
            phone,
            role,
            status,
        } );

        const result = await newUser.save();

        return { success: true, status: HttpStatusCode.CREATED, message: "User created Successfully", data : result };

    } catch (error) {
        return throwError( "Something went wrong!!", HttpStatusCode.BAD_GATEWAY, error  );
    }
}

module.exports = { loginService , signUpService}