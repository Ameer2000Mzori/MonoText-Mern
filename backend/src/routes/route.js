import express from 'express'
import {
  homePage,
  getArticle,
  createArticle,
  createAccount,
  login,
  getUsers,
  rateArticle,
} from '../controllers/controller.js'
import { guard } from '../middlewares/token.js'

const router = express.Router()

//  articles routes
router.get('/', homePage)
router.get('/article', getArticle)
router.post('/article', guard, createArticle)
router.post('/rate', guard, rateArticle)

// users routes
router.get('/user', getUsers)
router.post('/user', createAccount)
router.post('/login', login)

export default router
