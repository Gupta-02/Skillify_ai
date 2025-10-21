// Google Gemini AI integration
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function generateQuestions(topic, difficulty, numQuestions) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

    const prompt = `Generate ${numQuestions} multiple choice questions about ${topic} with ${difficulty} difficulty level. 
    Return a JSON array with the following structure:
    [
      {
        "text": "question text",
        "options": ["option1", "option2", "option3", "option4"],
        "correctAnswer": "correct option text"
      }
    ]
    Make sure the questions are diverse and cover different aspects of the topic.`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    
    // Parse JSON from response
    const jsonMatch = text.match(/\[[\s\S]*\]/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0])
    }
    
    throw new Error('Failed to parse questions from AI response')
  } catch (error) {
    console.error('Error generating questions:', error)
    throw error
  }
}

export async function analyzeTestResults(questions, userAnswers) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

    const prompt = `Analyze the following test results and provide detailed feedback:
    
    Questions and Answers:
    ${JSON.stringify(questions.map((q, i) => ({
      question: q.text,
      correctAnswer: q.correctAnswer,
      userAnswer: userAnswers[i]
    })))}
    
    Provide a comprehensive analysis including:
    1. Overall performance summary
    2. Strengths and weaknesses
    3. Areas for improvement
    4. Suggestions for further study
    
    Format the response as a well-structured text.`

    const result = await model.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('Error analyzing results:', error)
    throw error
  }
}
