const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const companyBranchSchema = new Schema( {
    companyId: { type: Schema.Types.ObjectId, ref: 'COMPANY', required: true },
    branchName: { type: String, required: true },
    branchAddress: { type: String, required: true },
    branchPhone: { type: String, required: true },
    branchEmail: { type: String, required: true },
    branchStatus: { type: String, enum: [ 'active', 'inactive' ], default: 'active' },
    branchIsDeleted: { type: Boolean, default: false },
},
{ timestamps: true, strictQuery: true, virtuals: true } );


module.exports = mongoose.model( "COMPANY_BRANCH", companyBranchSchema );