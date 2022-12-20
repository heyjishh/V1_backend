
const { STATUS_MSG } = require("../enums/statusCodes");
const { COMPANY_TERMINAL } = require("../model/modelIndex");
const { logger } = require("../utils/logger");


const createCompanyTerminalService = async (data) => {
    try {

        const result = await COMPANY_TERMINAL.create(data);
        return {
            status: STATUS_MSG.SUCCESS,
            message: "Company Terminal Created Successfully",
            data: result
        }
    } catch (error) {
      return {
          status: STATUS_MSG.ERROR,
          message: "Something Went Wrong",
          data: logger.error(error)
      }
    }
}


module.exports = {
    createCompanyTerminalService
}
