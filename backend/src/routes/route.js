import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
  res.send('this message is from backend')
})

export default router
