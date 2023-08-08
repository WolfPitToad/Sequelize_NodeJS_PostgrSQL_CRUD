import {Router} from 'express'
import{createTask,deleteTask,getTask, getTaskby, updateTask} from '../controllers/task.controllers.js'
import { authRequired } from '../middlewares/validateToken.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
import {createTaskSchema} from '../schemas/task.schema.js'
const router=Router()

router.get('/tasks',authRequired, getTask)
router.post('/tasks',authRequired,validateSchema(createTask),createTask)
router.put('/tasks/:id',authRequired,updateTask)
router.delete('/tasks/:id',authRequired,deleteTask)
router.get('/tasks/:id',authRequired,getTaskby)

export default router