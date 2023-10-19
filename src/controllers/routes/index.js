const express = require( 'express');
const {authentication} = require('../middlewares');
const userRoute = require('./user');
const app = express();

app.use('/',authentication)

app.use('/user',userRoute);

app.use((request, response) => {
    response.status(404).send({ message: "Invalid API name", data: {} });
});

module.exports = app;
