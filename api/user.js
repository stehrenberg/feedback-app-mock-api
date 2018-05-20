const API_LOGIN_FAIL = 'fail';

const express = require('express');
const api = express();

api.put('/session', (request, response) => {
  const session_token = request.body.session_token;
  if (session_token != undefined) {
    response.json({
      session_token
    });
    return;
  }

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