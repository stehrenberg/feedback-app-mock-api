const express = require('express');
const api = express();

const allTodos = [];

api.post('/', (request, response) => {
  const todo = request.body.resource;
  allTodos.push(todo);
  response.json({
    resource: todo,
  });
});

api.patch('/', (request, response) => {
  const changedTodos = request.body.resource;
  const responseArray = [];
  changedTodos.forEach(changedTodo => {
    const todoIndexToBePatched = allTodos.findIndex(storedTodo => storedTodo.todo_id === changedTodo.todo_id);
    allTodos[todoIndexToBePatched].completed = changedTodo.completed;
    
    responseArray.push(allTodos[todoIndexToBePatched]);
  });

  response.json({
    resource: responseArray,
  });
});

api.get('/', (request, response) => {
  response.json({
    resource: allTodos,
  });
});

module.exports = api;