const allSurveys = [];

const express = require('express');
const api = express();

api.get('/', (request, response) => {
  response.json({
    resource: allSurveys,
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