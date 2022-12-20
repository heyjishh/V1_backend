const stackErrorParser = require( 'error-stack-parser' );
const path = require( 'path' );
const fs = require( 'fs' );
const { promisify } = require( 'util' );
const readFile = promisify( fs.readFile );
const { get } = require( 'lodash' );


const apiThrowError = async ( error ) => {
    try {
        const stack = stackErrorParser.parse(error)
        const stackTrace = get(stack, '[0]');
        const filePath = get(stackTrace, 'fileName');
        const fileName = path.basename(filePath);
        const lineNumber = get(stackTrace, 'lineNumber');
        const columnNumber = get(stackTrace, 'columnNumber');
        const file = await readFile(filePath, 'utf8');

        const lines = file.split(' ')

        const start = Math.max(lineNumber - 3, 0);
        const end = Math.min(lines.length, lineNumber + 3);

        const context = lines.slice(start, end).map((line, index) => {
            const curr = index + start + 1;
            return (curr === lineNumber ? ' > ' : '   ') + curr + '| ' + line;
        }).join(' ');

        return {
            fileName,
            lineNumber,
            columnNumber,
            context,
            error: error.message,
            stack : error.stack
        }
    }catch (error) {
        return error;
    }
};

const throwError = async ( message, statusCode, error ) => {
    if ( !error ) {
        return  {
            success: false,
            statusCode,
            message: message,
            error: []
        }
    } else {
        return  {
            success: false,
            statusCode,
            message: message,
            error: await apiThrowError( error )
        }
    }
}


const reqLogger = async (req, res, next) => {
    console.log( 'reqLogger');
    const { method, url, body } = req;
    const log = `[${ new Date().toISOString() }] ${ method.toUpperCase() } -- ${ url }`;
    console.log( log );
    next();
};


module.exports = { throwError , reqLogger };
