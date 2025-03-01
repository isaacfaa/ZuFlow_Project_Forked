const express = require('express');
const bodyParser = require("body-parser");
const path = require('path'); // Add this line
const app = express();
const PORT = process.env.PORT || 5050;
const startPage = "Signup.html";

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static("./instrumented"));

app.use(express.static(path.join(__dirname, 'public')));

const { addAccount, login } = require('./utils/AccountUtil')

const { addTask, readJSON, deleteTask, editTask } = require('./utils/TaskUtil');


const {add_comment, get_comment} = require('./utils/CommentUtil');

const { addCategory, viewCategories } = require('./utils/CategoryUtil');


// Endpoint to add a task
app.post('/api/addTask', addTask);
app.post('/add-account', addAccount);

app.post('/login-account',login);
app.post('/add-comment', add_comment);
app.get('/get-comment/:id', get_comment);

// Endpoint to get all tasks
app.get('/api/getTasks', async (req, res) => {
  try {
    const tasks = await readJSON(path.join(__dirname, 'utils', 'task.json'));
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to delete a task
app.delete('/api/deleteTask/:id', deleteTask);

// Endpoint to edit a task
app.put('/api/editTask/:id', editTask);

// Endpoint to add a new account

app.post('/api/addAccount', addAccount);

// Route to serve the start page
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/instrumented/" + startPage);
});

// Endpoint to add a new category
app.post('/add-category', addCategory);

// Endpoint to view all categories
app.get('/view-categories', viewCategories);

// Start the server
const server = app.listen(PORT, () => {
  const address = server.address();
  const baseUrl = `http://${address.address === "::" ? 'localhost' : address.address}:${address.port}`;
  console.log(`Demo project at: ${baseUrl}`);
});


module.exports = { app, server };
