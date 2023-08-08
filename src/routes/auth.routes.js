import {Router} from 'express'
import{userLogin, userLogout, userRegister,profile} from '../controllers/auth.controllers.js'
import { authRequired } from '../middlewares/validateToken.js'
import {registerSchema,loginSchema} from '../schemas/auth.schema.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
const router=Router()

router.post('/register',validateSchema(registerSchema),userRegister)
router.post('/login',validateSchema(loginSchema),userLogin)
router.post('/logout',userLogout)

router.get('/profile',authRequired, profile )

export default router