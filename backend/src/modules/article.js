import mongoose, { Schema } from 'mongoose'

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

const Article = mongoose.model('Article', newSchema)

export { Article }
