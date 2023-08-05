import {Router} from 'express'
import{createTask,deleteTask,getTask, getTaskby, updateTask} from '../controllers/task.controllers.js'

const router=Router()

router.get('/tasks',getTask)
router.post('/tasks',createTask)
router.put('/tasks/:id',updateTask)
router.delete('/tasks/:id',deleteTask)
router.get('/tasks/:id',getTaskby)

export default router