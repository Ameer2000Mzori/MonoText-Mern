import mongoose, { Schema } from 'mongoose'

const newSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
    required: true,
  },
  value: {
    type: Number,
    required: true,
    default: 0,
  },
})
newSchema.index({ user: 1, article: 1 }, { unique: true })

const Rate = mongoose.model('Rate', newSchema)

export { Rate }
