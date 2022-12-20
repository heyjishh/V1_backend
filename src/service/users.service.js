const { throwError } = require("../utils/exceptions");
const { HttpStatusCode } = require("../enums/statusCodes")
const { USER } = require("../model/modelIndex");
const { usersByIdJoi } = require("../validation/users.validation");
const { paginations } = require("../utils/paginations");


const getUsersByIdService = async (_id) => {
    try {
        usersByIdJoi.validateAsync({ id: _id });
        const user = await USER.findById({ _id });
        if (!user) return throwError("User Not Found", HttpStatusCode.NOT_FOUND);
        return {
            success: true,
            status: HttpStatusCode.OK,
            message: "User Found",
            data: user
        }
    } catch (error) {
       throwError("Something Went Wrong", HttpStatusCode.INTERNAL_SERVER_ERROR, error);
    }
}


const getAllUsersService = async (query) => {
    try {
        const data = await paginations(USER, query);
        return {
            success: true,
            status: HttpStatusCode.OK,
            message: "Users Found",
            data: data
        }
    } catch (error) {
        throwError("Something Went Wrong", HttpStatusCode.INTERNAL_SERVER_ERROR, error);
    }
}

module.exports = {
    getUsersByIdService,
    getAllUsersService
}
