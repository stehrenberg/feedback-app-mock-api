const allSurveyResults = [];

const express = require('express');
const api = express();

api.get('/', (request, response) => {
  response.json({
    resource: allSurveyResults,
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