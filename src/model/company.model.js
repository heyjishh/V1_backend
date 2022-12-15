const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const companySchema = new Schema( {
    companyName: { type: String, required: true },
    companyAddress: { type: String, required: true },
    companyPhone: { type: String, required: true },
    companyLogo: { type: String, default: "" },
    companyLocation: { type: String, default: "" },
    companyWebsite: { type: String, default: "" },
    companyDescription: { type: String, default: "" },
    companyType: { type: String, enum: [ 'public', 'private' ], default: 'public' },
    companyEmail: { type: String, required: true },
    companyStatus: { type: String, enum: [ 'active', 'inactive' ], default: 'active' },
    companyIsDeleted: { type: Boolean, default: false },
    companyCreatedBy: { type: Schema.Types.ObjectId, ref: "USER", required: true },
    companyUpdatedBy: { type: Schema.Types.ObjectId, ref: "USER", required: true },
}, { timestamps: true, strictQuery: true, virtuals: true } );

module.exports = mongoose.model( "company", companySchema );
