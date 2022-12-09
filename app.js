const app = require( 'express' )();
const dbConnection = require( './src/dbConn/dbConnection.js' )
require( 'dotenv' ).config('./.env')
const port = process.env.PORT || 3000; 

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );


app.listen( port, async () => {
    console.log( `Server is Listining on ${ port }` );
   await dbConnection();
});


