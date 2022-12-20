const express = require( 'express' )
const cors = require( 'cors' )
const helmet = require( 'helmet' )
const app = express();
const dbConnection = require('./src/dbConn/dbConnection.js')
require( 'dotenv' ).config('./.env')
const port = process.env.PORT || 3000;
const { authRoute, companyRoute, usersRoute } = require('./src/routes/routeIndex');
const winston = require('winston');
const { format } = require('winston');
const swagger = require('swagger-ui-express');


const logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});



app.use(express.static('public'));


app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

app.use(cors({
    origin: '*',
    methods: 'GET,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
}));

app.use(helmet({
    contentSecurityPolicy: false,

})
);

var options = {
    explorer: true
};

app.use('/api-docs', swagger.serve, swagger.setup(
    require('./swagger.json'),
    options
));





if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}




app.use( '/api', authRoute );
app.use('/api', companyRoute);
app.use('/api' , usersRoute)

app.get( '*', ( req, res ) => {
    res.status( 404 ).json( {
        message: 'Not Found',
    } )
} )

app.listen(port, async () => {
    await dbConnection();
    console.log( `Server is Listining on ${ port }` );
});
