const express = require('express')
const router= express.Router();

const {
    getAllTasks, 
    getTask, 
    updateTask, 
    createTask, 
    deleteTask, 
    editTask,
} = require('../controllers/tasks')


router.route('/')
.get(getAllTasks)
.get(getAllTasks)
.post(createTask)
router.route('/:id')
.get(getTask)
.patch(updateTask)
.delete(deleteTask)
.put(editTask)

module.exports = router