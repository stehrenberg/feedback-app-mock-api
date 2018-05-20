const express = require('express');
const bodyParser = require('body-parser');

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
    response.sendStatus(200);
  }
  else {
    //move on
    next();
  }
});

module.exports = app;