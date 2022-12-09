const express = require( 'express' )
const cors = require( 'cors' )
const helmet = require( 'helmet' )
const app = express();
const dbConnection = require( './src/dbConn/dbConnection.js' )
const {log} = require( './src/utils/exceptions')
require( 'dotenv' ).config('./.env')
const port = process.env.PORT || 3000; 
const { authRoute } = require( './src/routes/routeIndex' )

app.use( express.json() );
app.use( express.urlencoded( { extended: true, limit: '5mb' } ) );

app.use( cors( {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
} ) );

app.use( helmet( {
    contentSecurityPolicy: false,

} )
);



app.route( '/api', authRoute )


app.get( '*', ( req, res ) => {
    res.status( 404 ).json( {
        message: 'Not Found',
    } )
} )

app.listen( port, async () => {
    log( `Server is Listining on ${ port }` );
     await dbConnection();
});


