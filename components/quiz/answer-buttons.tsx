import { createHash } from 'crypto'
import { memo, useEffect, useState } from 'react'

interface AnswersProps {
  correctAnswer: string,
  incorrectAnswers: Array<string>,
  onAnswer: Function,
}

type Answer = {
    answer: string,
    correct: boolean,
    index: string,
}

const Answers = ({ correctAnswer, incorrectAnswers, onAnswer }: AnswersProps) => {
  const [answers, setAnswers] = useState<Array<Answer>>([])

  const answered = (answer: Answer) => {
    onAnswer(answer.correct)
  }

  useEffect(() => {
    let ans: Array<Answer> = []
    let ansIndex = 0
    let correctAnswerIndex = Math.floor(Math.random() * 4)
    let index: string = ''

    // setAnswer(null)
    // setHasCorrectAnswer(false)

    for (let i = 0, j = incorrectAnswers.length + 1; i < j; i++) {
      index = String.fromCharCode(65 + i)

      if (correctAnswerIndex === i) {
        ans.push({
            answer: correctAnswer,
            index: index,
            correct: true,
        })
      } else {
        ans.push({
            answer: incorrectAnswers[ansIndex++],
            index: index,
            correct: false,
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
