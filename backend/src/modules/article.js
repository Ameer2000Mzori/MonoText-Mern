import mongoose, { Schema } from 'mongoose'
import { Rate } from './rate.js'

const newSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  rates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rate',
      required: true,
      default: 0,
    },
  ],
})

// Use post hook for the delete operation
newSchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    await Rate.deleteMany({ article: doc._id })
  }
})

const Article = mongoose.model('Article', newSchema)

export { Article }
