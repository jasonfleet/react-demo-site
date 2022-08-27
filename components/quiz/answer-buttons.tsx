import { createHash } from 'crypto'
import { memo, useEffect, useState } from 'react'

interface AnswersProps {
  correctAnswer: string,
  incorrectAnswers: Array<string>,
  onAnswer: Function,
}

type Answer = {
  answer: string,
  index: string,
  correct: boolean,
}

const Answers = ({ correctAnswer, incorrectAnswers, onAnswer }: AnswersProps) => {
  const [answers, setAnswers] = useState<Array<Answer>>([])

  const answered = (answer: string) => {
    onAnswer(answer === correctAnswer)
  }

  useEffect(() => {
    let ans: Array<Answer> = []
    let ansIndex = 0
    let correctAnswerIndex = Math.floor(Math.random() * 4)

    // setAnswer(null)
    // setHasCorrectAnswer(false)

    for (let i = 0, j = incorrectAnswers.length + 1; i < j; i++) {
      if (correctAnswerIndex === i) {
        ans.push({
          answer: correctAnswer,
          index: String.fromCharCode(65 + i),
          correct: true
        })
      } else {
        ans.push({
          answer: incorrectAnswers[ansIndex++],
          index: String.fromCharCode(65 + i),
          correct: false
        })
      }
    }

    setAnswers(ans)
  }, [correctAnswer, incorrectAnswers])

  return <>
    <div className=''>
      {
        answers.map((answer, i) => {
          return <div className='quiz-answer' key={'quiz-answer-' + i} >
            {answer.index}.&nbsp;
            {answer.answer}
          </div>
        })
      }
    </div>
    <div className='flex flex-row gap-4 justify-center mt-8'>
      {
        answers.map((answer, i) => {
          return <button className='quiz-answer-button' key={'quiz-answer-button' + i} onClick={() => answered(answer)}>
            {answer.index}
          </button>
        })
      }
    </div>

  </>
}

export default memo(Answers)
