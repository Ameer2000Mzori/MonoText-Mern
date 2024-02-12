import express from 'express'

const app = express()
const router = express.Router()
app.use(router)

router.get('/', (req, res) => {
  res.send('this message is from backend')
})

app.listen(3000, (res, req) => {
  console.log('your app is running at port 3000')
})

// console.log('hallo world')
