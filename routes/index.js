const express = require('express');
const db = require('../db/db');
const controller = require('../controller/todos')
const bodyParser = require('body-parser');
// Set up the express app
const router = express.Router();

////// Endpoints go here //////

// get all todos
router.get('/api/v1/todos', controller.getAllTodos);

//get a todo by id
router.get('/api/v1/todos/:id', controller.getTodoById);

// post a new task to the todo list
router.post('/api/v1/todos', controller.createTodo);

// delete a todo from te list by id
router.delete('/api/v1/todos/:id', controller.deleteTodoById);

// change a todo by id
router.put('/api/v1/todos/:id', controller.updateTodoById);

module.exports = router;