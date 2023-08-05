import {Router} from 'express'
import {createProjects,deleteProject,getProjectTask,getProjectby,getProjects, updateProject} from'../controllers/projects.controllers.js'
const router =Router()

router.get('/projects',getProjects)
router.post('/projects',createProjects)
router.put('/projects/:id',updateProject)
router.delete('/projects/:id',deleteProject)
router.get('/projects/:id',getProjectby)
router.get('/projects/:id/tasks',getProjectTask)

export default router