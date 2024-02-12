import express from 'express'
import router from './routes/route.js'
import 'dotenv/config'

const app = express()
app.use(router)

const PORT = process.env.PORT || 4000

app.listen(PORT, (res, req) => {
  console.log(`your sever is running on ${PORT} port`)
})
