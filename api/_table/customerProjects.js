const express = require('express');
const api = express();

api.get('/', (request, response) => {
  response.json({
    resource: [
      {
        project_id: '1'
      },
      {
        project_id: '2'
      },
    ],
  });
});

module.exports = api;