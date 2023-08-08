import express from 'express'
import cookieParser from 'cookie-parser'

import projectsRoutes from './routes/project.routes.js'
import taskRoutes from './routes/task.routes.js'
import authRoutes from './routes/auth.routes.js'


const app =express()

app.use(express.json())
app.use(cookieParser())
app.use('/api/',projectsRoutes)
app.use('/api/',taskRoutes)
app.use('/api/', authRoutes)

export default app