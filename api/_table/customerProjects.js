const express = require('express');
const api = express();

const projects = require('../../config/projects');

api.get('/', (request, response) => {
  const projectIds = projects.map(project => ({ project_id: project.project_id }));

  response.json({
    resource: projectIds,
  });
});

module.exports = api;