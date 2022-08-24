import { createHash } from 'crypto'
import { memo, useEffect, useState } from 'react'

interface AnswersProps {
  correctAnswer: string,
  incorrectAnswers: Array<string>,
  onAnswer: Function,
}


const Answers = ({ correctAnswer, incorrectAnswers, onAnswer }: AnswersProps) => {
  const [answers, setAnswers] = useState<Array<string>>([])

  const answeredQuestion = (playerAnswer: string) => {
    // if (answer === null && question !== null) {
    //   setAnswer(playerAnswer)
    //   setHasCorrectAnswer(playerAnswer === question.correctAnswer)
    //   onAnswer(playerAnswer === question.correctAnswer)
    // }
  }


  useEffect(() => {
    if (question !== null) {
      let ans: Array<Answer> = []
      let ansIndex = 0
      let correctAnswerIndex = Math.floor(Math.random() * 4)

      setAnswer(null)
      setHasCorrectAnswer(false)

      for (let i = 0, j = question.incorrectAnswers.length + 1; i < j; i++) {
        if (correctAnswerIndex === i) {
          ans.push({
            answer: question.correctAnswer,
            key: String.fromCharCode(65 + i),
          })
        } else {
          ans.push({
            answer: question.incorrectAnswers[ansIndex++],
            key: String.fromCharCode(65 + i),
          })
        }
      }

      setAnswers(ans)
    }
  }, [correctAnswer, incorrectAnswers])

  return <div className='flex flex-row gap-4 justify-center mt-8'>
    {answers && answers.map((id: string, i: number) => {
      return <button className='quiz-answer-button' key={'quiz-answer-button' + i} onClick={() => onAnswer(id)}>{questionAnswer.key}</button>
    })}

  </div>
}

export default memo(Answers)
