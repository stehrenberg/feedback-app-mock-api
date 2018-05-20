const express = require('express');
const bodyParser = require('body-parser');
const process = require('process');

const serverPort = process.env.PORT || 8080

const api = express();

const user = require('./api/user');
api.use('/user', user);

const feedbackDb = require('./api/feedbackDb');
api.use('/feedback_db', feedbackDb);

const app = require('./app');
app.use('/api/v2', api);

app.listen(serverPort, () => {
  console.log(`Server running on port ${serverPort}`);
});