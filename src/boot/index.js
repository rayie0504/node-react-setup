'use strict';
require('dotenv').config()
const
    express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path')

const app = express();
const PORT = process.env.PORT
// Normal express config defaults
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(require('../controllers/routes/index'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
// finally, let's start our server...
const server = app.listen(PORT, () => {
   console.log("Listening on port ", PORT)
});

module.exports = server;