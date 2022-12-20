const { throwError } = require("../../utils/exceptions");
const { HttpStatusCode } = require("../../enums/statusCodes")
const { USER } = require("../../model/modelIndex");
const { createCompanyService } = require("../../service/company.service")


const getUsersById = async (req, res) => {
    try {
        const _id = req.query.id;

        if (!id) return throwError("Id Not Found", HttpStatusCode.NOT_FOUND)

        const result = await getUsersByIdService(_id)

        return res.status(result.status).json(result);

    } catch (error) {
        return throwError("Something Went Wrong", HttpStatusCode.INTERNAL_SERVER_ERROR, error);
    }
}

const getAllUsers = async (req, res) => {
    try {
        const query = {
            page: req.query.page,
            limit: req.query.limit
        }

        const result = await getAllUsersService(query);

        return res.status(result.status).json(result);

    } catch (error) {
       return  throwError("Something Went Wrong", HttpStatusCode.INTERNAL_SERVER_ERROR, error);
    }
}

module.exports = {
    getUsersById,
    getAllUsers
}
