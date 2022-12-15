const appRoot = require('path').resolve('.');

module.exports = {
    WINSTON: {
        OPTIONS: {
            APP: {
                level: 'info', // log only if less than or equal to this level
                filename: `${appRoot}/logs/app-%DATE%.log`,
                datePattern: 'YYYY-MM-DD',
                zippedArchive: false,
                maxSize: '20m',
                maxFiles: '7d',
                auditFile: 'app-audit.json',
                json: true,
                handleExceptions: true
            },
            ERRORS: {
                level: 'error',
                filename: `${appRoot}/logs/error-%DATE%.log`,
                datePattern: 'YYYY-MM-DD',
                zippedArchive: false,
                maxSize: '20m',
                maxFiles: '7d',
                auditFile: 'error-audit.json',
                json: true,
                handleExceptions: true
            },
            CONSOLE: {
                level: 'silly', // everything
                handleExceptions: true,
                json: false
            }
        }
    }

};
