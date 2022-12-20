const { login, signUp } = require('./auth/auth.controller');
const { getAllUsers, getUsersById } = require('./users/users.controller');
const { createCompany  , createCompanyTerminal } = require('./company/company.controller');


module.exports = {
    login,
    signUp,
    getAllUsers,
    getUsersById,
    createCompany,
    createCompanyTerminal
}
