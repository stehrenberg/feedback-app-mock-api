const survey = require('./survey');
const surveyResult = require('./surveyResult')

module.exports = function(api) {
  surveyResult(api);
  survey(api);
};