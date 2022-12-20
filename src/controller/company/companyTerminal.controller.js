const { logger } = require("../../utils/logger");
const { createCompanyTerminalService } = require("../../service/terminal.service");

const createCompanyTerminal = async (req, res) => {
    try {
        const { terminalName, terminalAddress, terminalPhone, terminalLocation, terminalStatus, terminalCreatedBy, terminalUpdatedBy } = req.body;
        const data = {
            terminalName,
            terminalAddress,
            terminalPhone,
            terminalLocation,
            terminalStatus,
            terminalCreatedBy,
            terminalUpdatedBy
        }
        const result = await createCompanyTerminalService(data);
        return res.status(result.status).json(result);
    } catch (error) {
        logger.error(error);
    }
};


module.exports = {
    createCompanyTerminal
};
