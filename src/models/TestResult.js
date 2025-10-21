// Test result model
import mongoose from 'mongoose'

const TestResultSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'User ID is required'],
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test',
    required: [true, 'Test ID is required'],
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
  },
  score: {
    type: Number,
    required: [true, 'Score is required'],
  },
  correctAnswers: {
    type: Number,
    required: [true, 'Correct answers count is required'],
  },
  wrongAnswers: {
    type: Number,
    required: [true, 'Wrong answers count is required'],
  },
  analysis: {
    type: String,
    required: [true, 'Analysis is required'],
  },
  questions: [{
    questionText: String,
    options: [String],
    correctAnswer: String,
    userAnswer: String,
  }],
}, {
  timestamps: true,
})

export default mongoose.models.TestResult || mongoose.model('TestResult', TestResultSchema)
