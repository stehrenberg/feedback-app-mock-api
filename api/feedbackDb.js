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

const customerProjects = require('./_table/customerProjects');
api.use('/_table/customer_projects/', customerProjects);

const projects = require('./_table/projects');
api.use('/_table/projects', projects);

module.exports = api;