import {Router} from 'express'
import{userLogin, userLogout, userRegister,profile} from '../controllers/auth.controllers.js'
import { authRequired } from '../middlewares/validateToken.js'

const router=Router()

router.post('/register',userRegister)
router.post('/login',userLogin)
router.post('/logout',userLogout)

router.get('/profile',authRequired, profile )

export default router