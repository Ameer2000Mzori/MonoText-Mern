import mongoose, { Schema } from 'mongoose'

const newSchema = new Schema({
  author: {
    type: String,
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
  rate: {
    type: Number,
    required: true,
    default: 0,
  },
})

const Article = mongoose.model('Article', newSchema)

export { Article }
