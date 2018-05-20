const allSurveyResults = [];

const express = require('express');
const api = express();

api.get('/', (request, response) => {
  const projectName = request.projectName.toLowerCase();
  const projectSurveyResults = allSurveyResults.filter(survey_result => {
    const surveyIdPattern = survey_result.survey_id.match(/[0-9]*-(.*)/);
    const surveyResultProjectName = surveyIdPattern[1].toLowerCase();
    return surveyResultProjectName === projectName;
  });

  response.json({
    resource: projectSurveyResults,
  });
});

api.post('/', (request, response) => {
  const surveyResults = request.body.resource;
  surveyResults.forEach(surveyResult => {
    allSurveyResults.push(surveyResult);
  });
  response.json(request.body);
});

api.patch('/', (request, response) => {
  const surveyResults = request.body.resource;
  surveyResults.forEach(changedResult => {
    const resultIndexToBePatched = allSurveyResults.findIndex(storedResult => {
      const isSameSurvey = storedResult.survey_id === changedResult.survey_id;
      const isSameQuestionId = storedResult.question_id === changedResult.question_id;
      return isSameSurvey && isSameQuestionId;
    });

    allSurveyResults[resultIndexToBePatched] = changedResult;
  });

  response.json(request.body);
});

module.exports = api;