const companyRoute = require( 'express' ).Router();
const { createCompany  } = require( '../controller/company/company.controller' );
const { authFunction } = require( '../middleware/authentication.middleware' );
const { reqLogger } = require( '../utils/exceptions' );

companyRoute.post( '/company/create', reqLogger, authFunction, createCompany );

module.exports = companyRoute
