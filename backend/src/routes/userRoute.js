import express from 'express'
import {
  createAccount,
  login,
  getUsers,
  delAccount,
} from '../controllers/userController.js'
import { guard } from '../middlewares/token.js'
const router = express.Router()

// users routes
router.get('/user', getUsers)
router.post('/user', createAccount)
router.delete('/user', guard, delAccount)
router.post('/login', login)

export default router
