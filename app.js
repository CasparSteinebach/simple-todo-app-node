const express = require('express');
const db = require('./db/db');
const bodyParser = require('body-parser');
// Set up the express app
const app = express();

// parse incoming  request data using bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

////// Endpoints go here //////
// get all todos
app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});

//get a todo by id

app.get('/api/v1/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    db.map((todo) => {
        if (todo.id === id) {
            return res.status(200).send({
                success: 'true',
                message: 'todo retrieved successfully',
                todo,
            });
        }
    });
    return res.status(404).send({
        success: 'false',
        message: 'todo does not exist',
    });
});


// post a new task to the todo list
//first check if the post fits the requirements for the todo list
app.post('/api/v1/todos', (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({
            success: 'false',
            message: 'title is required'
        });
    } else if (!req.body.description) {
        return res.status(400).send({
            success: 'false',
            message: 'description is required'
        });
    }
    //constructor for the post in the todo
    const todo = {
            id: db.length + 1,
            title: req.body.title,
            description: req.body.description
        }
        // push the todo to the db
    db.push(todo);
    return res.status(201).send({
        success: 'true',
        message: 'todo added successfully',
        todo
    })
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});