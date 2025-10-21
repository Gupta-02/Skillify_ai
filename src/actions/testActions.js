// Test-related server actions
'use server'

import dbConnect from '@/lib/dbConnect'
import Test from '@/models/Test'
import TestResult from '@/models/TestResult'
import { generateQuestions, analyzeTestResults } from '@/lib/gemini'
import { calculateScore } from '@/lib/utils'

export async function createTest(testData) {
  try {
    await dbConnect()

    // Generate questions using AI
    const questions = await generateQuestions(
      testData.title,
      testData.difficulty,
      testData.numQuestions
    )

    // Create test in database
    const test = await Test.create({
      ...testData,
      questions,
    })

    return { success: true, testId: test._id.toString() }
  } catch (error) {
    console.error('Error creating test:', error)
    return { error: 'Failed to create test' }
  }
}

export async function getTestById(testId) {
  try {
    await dbConnect()
    const test = await Test.findById(testId)
    return { success: true, test: JSON.parse(JSON.stringify(test)) }
  } catch (error) {
    console.error('Error fetching test:', error)
    return { error: 'Failed to fetch test' }
  }
}

export async function getAllTests() {
  try {
    await dbConnect()
    const tests = await Test.find({}).sort({ createdAt: -1 })
    return { success: true, tests: JSON.parse(JSON.stringify(tests)) }
  } catch (error) {
    console.error('Error fetching tests:', error)
    return { error: 'Failed to fetch tests' }
  }
}

export async function submitTest(testId, userId, userAnswers) {
  try {
    await dbConnect()

    // Get test
    const test = await Test.findById(testId)
    if (!test) {
      return { error: 'Test not found' }
    }

    // Calculate score
    const { score, correctAnswers, wrongAnswers } = calculateScore(
      test.questions,
      userAnswers
    )

    // Get AI analysis
    const analysis = await analyzeTestResults(test.questions, userAnswers)

    // Save result
    const result = await TestResult.create({
      userId,
      testId,
      difficulty: test.difficulty,
      score,
      correctAnswers,
      wrongAnswers,
      analysis,
      questions: test.questions.map((q, i) => ({
        questionText: q.text,
        options: q.options,
        correctAnswer: q.correctAnswer,
        userAnswer: userAnswers[i],
      })),
    })

    return { success: true, resultId: result._id.toString() }
  } catch (error) {
    console.error('Error submitting test:', error)
    return { error: 'Failed to submit test' }
  }
}

export async function getTestResult(resultId) {
  try {
    await dbConnect()
    const result = await TestResult.findById(resultId)
    return { success: true, result: JSON.parse(JSON.stringify(result)) }
  } catch (error) {
    console.error('Error fetching result:', error)
    return { error: 'Failed to fetch result' }
  }
}

export async function getUserResults(userId) {
  try {
    await dbConnect()
    const results = await TestResult.find({ userId }).sort({ createdAt: -1 })
    return { success: true, results: JSON.parse(JSON.stringify(results)) }
  } catch (error) {
    console.error('Error fetching user results:', error)
    return { error: 'Failed to fetch user results' }
  }
}
