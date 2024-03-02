import express from 'express'
import router from './routes/route.js'
import userRoute from './routes/userRoute.js'
import 'dotenv/config'
import mongoConnect from './db/db.js'

const app = express()
app.use(express.json())
app.use(router)
app.use(userRoute)

const PORT = process.env.PORT || 4000

mongoConnect(() => {
  app.listen(PORT, (req, res) => {
    console.log(`server is running at port ${PORT}`)
  })
})
