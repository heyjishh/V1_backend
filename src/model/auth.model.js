const  mongoose  = require( "mongoose" );
const Schema = mongoose.Schema;

const authSchema = new Schema( {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: String, default: new Date().toISOString() },
    address: { type: String, required: true },
    dob: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, enum: [ 'admin', 'user' ], default: 'user' },
    gender: { type: String, enum: [ 'male', 'female', 'other' ], required: true },
    profileImage: { type: String, default: "" },

    status: { type: String, enum: [ 'active', 'inactive' ], default: 'active' },
    token: { type: String, default: "" },
    resetPasswordToken: { type: String, default: "" },
    ipAddress: { type: String, default: "" },
    geoLocation: { type: String, default: "" },
    longitude: { type: String, default: "" },
    latitude: { type: String, default: "" },

    // company related
    companyId: { type: Schema.Types.ObjectId, ref: 'COMPANY', default: null },
    branchId: { type: Schema.Types.ObjectId, ref: 'COMPANY_BRANCH', default: null },

    isVerified: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    isEmailVerified: { type: Boolean, default: false },
    isPhoneVerified: { type: Boolean, default: false },
},
   { timestamps: true, strictQuery: true, virtuals: true } );

const USER = mongoose.model( "USER", authSchema );

module.exports = USER;
