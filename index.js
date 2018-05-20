const express = require('express');
const bodyParser = require('body-parser');
const process = require('process');

const serverPort = process.env.PORT || 8080;
const apiVersion = process.env.VERSION || 'v2';

const api = express();

const user = require('./api/user');
api.use('/user', user);

const feedbackDb = require('./api/feedbackDb');
api.use('/feedback_db', feedbackDb);

const app = require('./app');
const appBasePath = `/api/${apiVersion}`;
app.use(appBasePath, api);

app.listen(serverPort, () => {
  console.log(`Server running on port ${serverPort}, serving http://localhost:${serverPort}${appBasePath}`);
});