const { throwError } = require( "../../utils/exceptions" );
const { HttpStatusCode } = require( "../../enums/statusCodes" )
const { USER } = require( "../../model/modelIndex" );
const { createCompanyService } = require("../../service/company.service")

const createCompany = async ( req, res,  ) => {
    try {
        const userId = req.userId;
        if ( !userId ) throwError( "User Not Found", HttpStatusCode.NOT_FOUND );
        const adminCheck = await USER.findById( { _id: userId, userRole: "admin" } );
        if ( !adminCheck ) throwError( "You are not authorized to create company", HttpStatusCode.UNAUTHORIZED );
        
        const { companyName, companyAddress, companyPhone, companyLogo, companyLocation, companyWebsite, companyDescription, companyType, companyEmail, companyStatus } = req.body;
        const data = {
            companyName,
            companyAddress,
            companyPhone,
            companyLogo,
            companyLocation,
            companyWebsite,
            companyDescription,
            companyType,
            companyEmail,
            companyStatus,
            companyCreatedBy: userId,
            companyUpdatedBy: userId
        }

        const result = await createCompanyService( data );
        
        return res.status( result.status ).json( result );
    } catch (error) {
        throwError( "Something Went Wrong", HttpStatusCode.INTERNAL_SERVER_ERROR, error );
    }
}

module.exports = {
    createCompany
}
