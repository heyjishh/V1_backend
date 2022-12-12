const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const userRoleSchema = new Schema( {
    userId: { type: Schema.Types.ObjectId, ref: 'USER', required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: [ 'active', 'inactive' ], default: 'active' },
    isDeleted: { type: Boolean, default: false },
})