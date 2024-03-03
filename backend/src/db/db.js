import mongoose from 'mongoose'
import 'dotenv/config'

const db = {}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mono-app.8u8ulsg.mongodb.net/`

const mongoConnect = (cb) => {
  mongoose.set('strictQuery', true)
  mongoose
    .connect(uri, {
      usenewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      cb()
    })
    .catch((err) => console.log(err))
}

export default mongoConnect
