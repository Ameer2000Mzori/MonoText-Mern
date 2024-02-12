import express from 'express'
import { homePage, addArticle } from '../controllers/controller.js'

const router = express.Router()

router.get('/', homePage)
router.get('/article', addArticle)

export default router
