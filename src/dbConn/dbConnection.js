const mongoose = require( 'mongoose' );

const dbConnection = async () => {
    try {
        mongoose.set( 'strictQuery', true )
        const connection = await mongoose.connect( process.env.DB_CONNECTION,)
        if ( connection ) console.log( 'Database connected successfully' )
        else {
            console.log( 'Database connection failed' )
            return false
        }
    } catch (error) {
        return error.message
    }
}

module.exports = dbConnection
