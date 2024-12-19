import express from 'express';
import TaskController from '../controller/TaskController.js';

const Taskrouter = express.Router();

Taskrouter.get('/allTask', TaskController.getAllTask);

Taskrouter.post('/addTask', TaskController.addtask);

Taskrouter.put('/editTask/:id', TaskController.updatetasks);

Taskrouter.delete('/deleteTask/:id', TaskController.deletetasks);

export default Taskrouter;
