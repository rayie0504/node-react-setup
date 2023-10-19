const express = require('express');
const expressRouter = express.Router();
const { user } = require('../../services');

expressRouter.get('/get',async (request, response) => {
    try {
        const result = await user.getUser(request.query);
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error.message);

    }
});

module.exports = expressRouter;