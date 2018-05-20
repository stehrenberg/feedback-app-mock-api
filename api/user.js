const API_LOGIN_FAIL = 'fail';

const express = require('express');
const api = express();

api.put('/session', (request, response) => {
  response.json({});
});

api.post('/session', (request, response) => {
  if (request.body.email === API_LOGIN_FAIL) {
    response.sendStatus(403);
    return;
  }

  response.json({
    session_token: '42'
  });
});

module.exports = api;