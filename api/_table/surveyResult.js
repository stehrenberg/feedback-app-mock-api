const allSurveyResults = [];

module.exports = function (api) {
  api.get(/^\/_table\/survey_result_(.*)$/, (request, response) => {
    response.json({
      resource: allSurveyResults,
    });
  });

  api.post('/_table/survey_result', (request, response) => {
    const surveyResults = request.body.resource;
    surveyResults.forEach(surveyResult => {
      allSurveyResults.push(surveyResult);
    });
    response.json(request.body);
  });

  api.patch('/_table/survey_result', (request, response) => {
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
};