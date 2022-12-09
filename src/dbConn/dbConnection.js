const mongoose = require( 'mongoose' );
const {log} = require('../utils/exceptions')

const dbConnection = async () => {
    try {
        mongoose.set( 'strictQuery', true )
        const connection = await mongoose.connect( process.env.DB_CONNECTION,)
        if ( connection ) log( 'Database connected successfully' )
        else {
            log( 'Database connection failed' )
            return false
        }
    } catch (error) {
        return error.message
    }
}

module.exports = dbConnection