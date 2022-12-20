module.exports = {
    login: require('./auth/auth.controller'),
    signUp: require('./auth/auth.controller'),

    getUsersById: require('./users/users.controller'),
    getAllUsers: require('./users/users.controller'),

    createCompany: require('./company/company.controller'),
    createCompanyTerminal: require('./company/companyTerminal.controller'),
}
