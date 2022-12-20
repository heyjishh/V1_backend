const usersRoute = require('express').Router();
const { getAllUsers , getUsersById } = require('../controller/index');
const { authFunction } = require('../middleware/authentication.middleware');
const { reqLogger } = require('../utils/exceptions');

usersRoute.get('/users', reqLogger, authFunction, getAllUsers);
usersRoute.get('/users', reqLogger, authFunction, getUsersById);

module.exports = usersRoute
