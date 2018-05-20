const allSurveys = [];

module.exports = function(api) {
  api.get(/^\/_table\/survey_(.*)$/, (request, response) => {
    response.json({
      resource: allSurveys,
    });
  });

  api.post('/_table/survey', (request, response) => {
    allSurveys.push(request.body.resource);
    response.json(request.body);
  });

  api.patch('/_table/survey', (request, response) => {
    const patchedSurvey = request.body.resource;
    const surveyIndex = allSurveys.findIndex(survey => survey.survey_id === patchedSurvey.survey_id);
    allSurveys[surveyIndex] = patchedSurvey;
    response.json(allSurveys[surveyIndex]);
  });
};