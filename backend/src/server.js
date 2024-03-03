import express from 'express'
import mongoConnect from './db/db.js'
import 'dotenv/config'
import userRoute from './routes/userRoute.js'
import articleRoute from './routes/articleRoute.js'

const app = express()
app.use(express.json())
app.use(articleRoute)
app.use(userRoute)

const PORT = process.env.PORT || 4000

mongoConnect(() => {
  app.listen(PORT, (req, res) => {
    console.log(`server is running at port ${PORT}`)
  })
})
