const bcrypt = require( "bcryptjs" );
const jwt = require( "jsonwebtoken" );
const { HttpStatusCode } = require( "../enums/statusCodes" );
const {  throwError } = require( "../utils/exceptions" );
const { loginJoi, signUpJoi } = require( "../validation/Auth" );
const { USER } = require( "../model/modelIndex" );
const salt = bcrypt.genSaltSync( 10 );

//--Login Service
const loginService = async ( data ) => {
    try {
        loginJoi.validateAsync( data );

        const email = data.email;
        const password = data.password;

        const user = await USER.findOne( { email } );
        if ( !user ) {
            throwError( "User does not exist", HttpStatusCode.NOT_FOUND );
        }

        const isMatch = await bcrypt.compare( password, user.password );
        if ( !isMatch ) {
            throwError( "Invalid credentials", HttpStatusCode.UNAUTHORIZED );
        }

        const token = jwt.sign( { email: user.email, userId: user._id }, process.env.JWT_KEY, { expiresIn: "4h" } );
        await USER.updateOne( { _id: user._id }, { $set: { token: token } } );

        return { success: true, status: HttpStatusCode.OK, message: "Login successful", userId: user._id, token }

    } catch (error) {
        return throwError( "Something went wrong!!",HttpStatusCode.BAD_GATEWAY, error  );
    }
}

// Sign Up Service
const signUpService = async ( data ) => {
    try {
        signUpJoi.validateAsync(data);

        const { name, email, password, address, dob, phone, role, status, repeatPassword } = data;

        if ( password !== repeatPassword ) {
            throwError( "Passwords do not match", HttpStatusCode.BAD_REQUEST );
        }

        const user = await USER.findOne({ email });
        if ( user ) {
            throwError( "User already exists", HttpStatusCode.CONFLICT );
        }

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await USER( {
            name,
            email,
            password: hashedPassword,
            date : new Date().toISOString(),
            address,
            dob,
            phone,
            role,
            status,
        });
        const result = await newUser.save()

        return { success: true, status: HttpStatusCode.CREATED, message: "User created Successfully", data : result  };

    } catch (error) {
        return throwError( "Something went wrong!!", HttpStatusCode.BAD_GATEWAY, error  );
    }
}

module.exports = { loginService , signUpService}
