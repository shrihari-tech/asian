const express = require('express');
const Task = require('../Schema/Task');
const router = express.Router();
const User = require('../Schema/User');

// Create a new task
router.post('/createTask', async (req, res) => {
    const { title, description, status, createdBy } = req.body;
    try {
        const newTask = new Task({ title, description, status, createdBy });
        await newTask.save();
        res.status(201).json({ message: 'Task created successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
})

// get tasks by user id
router.get('/getTasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const tasks = await Task.find({ createdBy: id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
})

module.exports = router;