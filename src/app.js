import express from 'express'
import projectsRoutes from './routes/project.routes.js'
import taskRoutes from './routes/task.routes.js'

const app =express()

app.use(express.json())
app.use(projectsRoutes)
app.use(taskRoutes)

export default app