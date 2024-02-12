import express from 'express'
import {
  homePage,
  getArticle,
  createArticle,
  createAccount,
  getUsers,
} from '../controllers/controller.js'

const router = express.Router()

//  articles routes
router.get('/', homePage)
router.get('/article', getArticle)
router.post('/article', createArticle)

// users routes
router.get('/user', getUsers)
router.post('/user', createAccount)

export default router
