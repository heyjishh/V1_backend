const { HttpStatusCode } = require( "../enums/statusCodes" );
const { throwError } = require( "../utils/exceptions" );
const { companyJoi } = require( "../validation/company.validation" );
const { COMPANY } = require( "../model/modelIndex" );

const createCompanyService = async ( data ) => {
    try {
        companyJoi.validateAsync( data );

        const companyCheck = await COMPANY.findOne( { companyName: data.companyName } );
        if ( companyCheck ) throwError( "Company already exists", HttpStatusCode.CONFLICT );

        const company = await COMPANY.create( data );
        
        return { success: true, status: HttpStatusCode.CREATED, message: "Company Created Successfully", data: company };

    } catch ( error ) {
        throwError( "Something went wrong!!", HttpStatusCode.BAD_GATEWAY, error );
    }
}

module.exports = {
    createCompanyService
}
