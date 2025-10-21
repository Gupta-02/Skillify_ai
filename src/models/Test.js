// Test model
import mongoose from 'mongoose'

const QuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  options: [{
    type: String,
    required: true,
  }],
  correctAnswer: {
    type: String,
    required: true,
  },
})

const TestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  numQuestions: {
    type: Number,
    required: [true, 'Please specify number of questions'],
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium',
  },
  timeLimit: {
    type: Number,
    required: [true, 'Please specify time limit in minutes'],
  },
  tags: [{
    type: String,
  }],
  questions: [QuestionSchema],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
})

export default mongoose.models.Test || mongoose.model('Test', TestSchema)
