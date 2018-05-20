const express = require('express');
const bodyParser = require('body-parser');
const process = require('process');

const serverPort = process.env.PORT || 8080

const api = express();

// API consts
const API_LOGIN_FAIL = 'fail';

api.options('/user/session', (request, response) => {
  response.send('Huhu');
});

api.put('/user/session', (request, response) => {
  response.json({});
});

api.post('/user/session', (request, response) => {
  if (request.body.email === API_LOGIN_FAIL) {
    response.sendStatus(403);
    return;
  }

  response.json({
    session_token: '42'
  });
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(request, response, next) {
  const allowedHeaders = [
    'Content-Type',
    'Authorization',
    'Content-Length',
    'X-Requested-With',
    'X-DreamFactory-Api-Key',
  ];

  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  response.header('Access-Control-Allow-Headers', allowedHeaders.join(','));

  //intercepts OPTIONS method
  if ('OPTIONS' === request.method) {
    //respond with 200
    response.send(200);
  }
  else {
    //move on
    next();
  }
});

app.use('/api/v2', api);

app.listen(serverPort, () => {
  console.log(`Server running on port ${serverPort}`);
});