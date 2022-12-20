const usersRoute = require('express').Router();
const { getAllUsers , getUsersById } = require('../controller/index');
const { authFunction } = require('../middleware/authentication.middleware');
const { reqLogger } = require('../utils/exceptions');

usersRoute.get('/users-byId', authFunction, getUsersById);
usersRoute.get('/users', authFunction, getAllUsers);

module.exports = usersRoute
