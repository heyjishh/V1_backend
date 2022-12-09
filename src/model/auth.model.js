const  mongoose  = require( "mongoose" );
const Schema = mongoose.Schema;

const authSchema = new Schema( {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: String, default: new Date().toISOString() },
    address: { type: String, required: true },
    dob : { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, enum: [ 'admin', 'user' ] , default : 'user' },
    status: { type: String, enum: [ 'active', 'inactive' ]  , default: 'active'},
    token: { type: String, default : ""},
    resetPasswordToken: { type: String , default : ""},
}, {  timestamps: true , strictQuery : true , virtuals :true } );

const USER = mongoose.model( "USER", authSchema );

module.exports = USER;
