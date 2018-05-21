const express = require('express');
const api = express();

api.get('/', (request, response) => {
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

module.exports = api;