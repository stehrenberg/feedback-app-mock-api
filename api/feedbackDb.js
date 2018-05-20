const express = require('express');
const api = express();

api.get(/^\/_table\/todos_(.*)$/, (request, response) => {
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
      },
    ],
  });
});

api.get('/_table/projects', (request, response) => {
  // Activate if dynamic project name loading is needed
  // const url = require('url');
  // const urlParts = url.parse(request.url, true);
  // const idsAsTrimmedString = urlParts.query.ids.replace(', ', ',');
  // const ids = idsAsTrimmedString.split(',');

  response.json({
    resource: [
      {
        project_id: '1',
        project_name: 'Brontales Projekt'
      },
      {
        project_id: '2',
        project_name: 'Normales Projekt'
      },
    ],
  });
});

const surveyComplete = require('./_table/surveyComplete');
surveyComplete(api);

module.exports = api;