const express = require('express');
const api = express();

const storeProjectNameForMiddleware = (request, response, next) => {
  request.projectName = request.params[0];
  next();
};

const todos = require('./_table/todos');
api.use('/_table/todos', todos);
api.use(/^\/_table\/todos_(.*)$/, storeProjectNameForMiddleware);
api.use(/^\/_table\/todos_(.*)$/, todos);

const surveyResult = require('./_table/surveyResult');
api.use('/_table/survey_result', surveyResult);
api.use(/^\/_table\/survey_result_(.*)$/, storeProjectNameForMiddleware);
api.use(/^\/_table\/survey_result_(.*)$/, surveyResult);

const survey = require('./_table/survey');
api.use('/_table/survey', survey);
api.use(/^\/_table\/survey_(.*)$/, storeProjectNameForMiddleware);
api.use(/^\/_table\/survey_(.*)$/, survey);

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

module.exports = api;