// Utility functions
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

export function calculateScore(questions, userAnswers) {
  let correct = 0
  questions.forEach((question, index) => {
    if (question.correctAnswer === userAnswers[index]) {
      correct++
    }
  })
  return {
    score: (correct / questions.length) * 100,
    correctAnswers: correct,
    wrongAnswers: questions.length - correct
  }
}
