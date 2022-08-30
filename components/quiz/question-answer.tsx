import { memo, useEffect, useState } from 'react'
import { State } from '../../pages/games/quiz'
import { QuestionObject, QuestionServices } from './question-services'

type Answer = {
  answer: string,
  correct: boolean,
  index: string,
}

interface QuestionsProps {
  difficulty: string,
  onAnswer: Function,
  state: State,
}

const questionsService: QuestionServices = new QuestionServices()

const QuestionAnswer = ({ difficulty, onAnswer, state }: QuestionsProps) => {
  const [answers, setAnswers] = useState<Array<Answer>>([])
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<string>('')
  const [answerIndex, setAnswerIndex] = useState<string>('')
  const [question, setQuestion] = useState<QuestionObject | null>(null)

  const answered = (answer: Answer) => {
    onAnswer(answer.correct)
    setAnswerIndex(answer.index)
  }

  useEffect(() => {
    if (!questionsService.loading) {
      questionsService.getNextQuestion(difficulty)
      .then(res => {
        let ans: Array<Answer> = []
        let ansIndex = 0
        let correctAnswerIndex = Math.floor(Math.random() * 4)
        let index: string = ''

        for (let i = 0, j = res.incorrectAnswers.length + 1; i < j; i++) {
          index = String.fromCharCode(65 + i)

          if (correctAnswerIndex === i) {
            ans.push({
              answer: res.correctAnswer,
              index: index,
              correct: true,
            })
            setCorrectAnswerIndex(index)
          } else {
            ans.push({
              answer: res.incorrectAnswers[ansIndex++],
              index: index,
              correct: false,
            })
          }
        }

        console.log(ans)
        setQuestion(res)
        setAnswers(ans)
      })
    }
  }, [difficulty, state])

  return <>
    <h2>Question</h2>
    {
      question && <div>
        <div className='quiz-question'>{question.question}</div>
          <div className=''>
            {
              answers.map((answer: Answer, i: number) => {
                return <div
                  className={'quiz-answer' + (answerIndex !== '' && answerIndex === answer.index ? answer.correct ? ' quiz-answer-right' : ' quiz-answer-wrong' : '')}
                  key={'quiz-answer-' + i}
                >
                  {answer.index}.&nbsp;
                  {answer.answer}
                </div>
              })
            }
          </div>
          <div className='flex flex-row gap-4 justify-center mt-8'>
            {
              answers.map((answer: Answer, i: number) => {
                return <button className='quiz-answer-button' key={'quiz-answer-button-' + i} onClick={() => answered(answer)}>
                  {answer.index}
                </button>
              })
            }
          </div>
      </div>
    }
  </>
}

export default QuestionAnswer
