const stackErrorParser = require( 'error-stack-parser' );
const path = require( 'path' );
const fs = require( 'fs' );
const readFile = promisify( fs.readFile );
const { get } = require( 'lodash' );
const logger = require( './logger.js' );

const apiThrowError = async ( error ) => {
    try {
        const stack = stackErrorParser.parse( error );
        const stackTrace = stack[ 0 ];
        const { fileName, lineNumber, columnNumber } = stackTrace;
        const filePath = path.join( __dirname, `../../${ fileName }` );
        const file = await readFile
            ( filePath, 'utf8' );
        const lines = file.split()
            .map( ( line, index ) => ( {
                line: index + 1,
                text: line
            } ) );
        const errorLine = get( lines, lineNumber - 1 );
        const errorColumn = get( errorLine, 'text' )
            .split( '' )[ columnNumber - 1 ];
        const errorObject = {
            success: false,
            fileName,
            lineNumber,
            columnNumber,
            errorLine,
            errorColumn
        };
        logger.error( errorObject );
        return errorObject;
    } catch ( error ) {
        logger.error( error );
        return error;
    }
};

const throwError = async ( message, statusCode, error ) => {
    if ( !error ) {
        return JSON.stringify( {
            success: false,
            statusCode,
            message: message,
            error: []
        } )
    } else {
        return JSON.stringify( {
            success: false,
            statusCode,
            message: message,
            error: await apiThrowError( error )
        } )
    }
}

const log = data => logger.error( data )

module.exports = { throwError, log };
