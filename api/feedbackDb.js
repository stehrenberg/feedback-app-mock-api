const express = require('express');
const api = express();

api.get(/^\/_table\/todos_(\w+)$/, (request, response) => {
  response.json({
    resource: [],
  });
});

api.get('/_table/customer_projects/', (request, response) => {
  response.json({
    resource: [
      {
        project_id: '1'
      },
      {
        project_id: '2'
      }
    ],
  });
});

module.exports = api;