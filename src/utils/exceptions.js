const stackErrorParser = require( 'error-stack-parser' );
const path = require( 'path' );
const fs = require( 'fs' );
const { promisify } = require( 'util' );
const readFile = promisify( fs.readFile );
const { get } = require( 'lodash' );

const log = ( data ) => {
    console.log( `[${ new Date().toISOString() }] ${ JSON.stringify( data ) }` );
}


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
        log.error( errorObject );
        return errorObject;
    } catch ( error ) {
        log.error( error );
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


const reqLogger = async ( req, res, next ) => {
    const { method, url, body } = req;
    const log = `[${ new Date().toISOString() }] ${ method.toUpperCase() } ${ url } ${ JSON.stringify( body ) }`;
    await log( log );
    next();
};


module.exports = { throwError, log, reqLogger };

