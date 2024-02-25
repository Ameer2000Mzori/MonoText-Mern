import mongoose, { Schema } from 'mongoose'
import { Article } from './article.js'

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article',
    },
  ],
})
userSchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    await Article.deleteMany({ author: doc._id })
  }
})

const User = mongoose.model('User', userSchema)

export { User }
