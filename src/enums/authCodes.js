const AuthStatus = {
    ADMIN: 'admin',
    USER: 'user',
    ACTIVE: 'active',
    INACTIVE: 'inactive'
}

const DB_LOGGER_TYPES = {
    ERROR: {
        CLIENT: 'CLIENT',
        SERVER: 'SERVER',
        THIRD_PARTY: 'THIRD PARTY'
    },
    LOGGER: {
        REQUEST: 'REQUEST',
        RESPONSE: 'RESPONSE',
        CRON: 'CRON',
        BACKEND_PROCESS: 'BACEKND PROCESS'
    }
};

module.exports = { AuthStatus  , DB_LOGGER_TYPES}
