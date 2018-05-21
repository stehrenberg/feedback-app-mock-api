const express = require('express');
const api = express();

const allSurveys = require('../../config/surveys');

api.get('/', (request, response) => {
  const projectName = request.projectName.toLowerCase();
  const projectSurveys = allSurveys.filter(survey => survey.project_name.toLowerCase() === projectName);

  response.json({
    resource: projectSurveys,
  });
});

api.post('/', (request, response) => {
  allSurveys.push(request.body.resource);
  response.json(request.body);
});

api.patch('/', (request, response) => {
  const patchedSurvey = request.body.resource;
  const surveyIndex = allSurveys.findIndex(survey => survey.survey_id === patchedSurvey.survey_id);
  allSurveys[surveyIndex] = patchedSurvey;
  response.json(allSurveys[surveyIndex]);
});

module.exports = api;