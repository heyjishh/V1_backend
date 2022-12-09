const  mongoose  = require( "mongoose" );
const Schema = mongoose.Schema;

const authSchema = new Schema( {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    address: { type: String, required: true },
    dob : { type: Date, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true, enum: [ 'admin', 'user' ] },
    status: { type: String, enum: [ 'active', 'inactive' ]  , default: 'active'},
    token: { type: String, default : ""},
    resetPasswordToken: { type: String , default : ""},
}, { strict: true, timestamps: true, toJSON: true, toObject: true } );

const USER = mongoose.model( "USER", authSchema );

module.exports = USER;