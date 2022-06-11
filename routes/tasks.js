const express = require('express');
const tasks = express.Router();

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks');

tasks.route('/').get(getAllTasks).post(createTask);
tasks.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = tasks;

