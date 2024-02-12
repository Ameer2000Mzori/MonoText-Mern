import express from 'express'
import router from './routes/route.js'

const app = express()
app.use(router)

app.listen(3000, (res, req) => {
  console.log('your app is running at port 3000')
})
