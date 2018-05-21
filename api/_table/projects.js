const express = require('express');
const api = express();

const projects = require('../../config/projects');

api.get('/', (request, response) => {
  // Activate if dynamic project name loading is needed
  // const url = require('url');
  // const urlParts = url.parse(request.url, true);
  // const idsAsTrimmedString = urlParts.query.ids.replace(', ', ',');
  // const ids = idsAsTrimmedString.split(',');

  response.json({
    resource: projects,
  });
});

module.exports = api;