import { useEffect, useState } from 'react'
import { GameState } from '../../pages/games/quiz'
import { QuestionObject, QuestionServices } from '../../pages/api/questions'
import { strictEqual } from 'assert'
import { stat } from 'fs'

type Answer = {
  answer: string,
  correct: boolean,
  index: string,
}

interface QuestionsProps {
  categories: Array<string>,
  difficulty: string,
  limit: number,
  onEndGame: Function,
  onAnswer: Function,
  questionCount: number,
  state: GameState,
}

const questionsService: QuestionServices = new QuestionServices()

const QuestionAnswer = ({ categories, difficulty, limit, questionCount, onAnswer, onEndGame, state }: QuestionsProps) => {
  const [answers, setAnswers] = useState<Array<Answer>>([])
  const [answerIndex, setAnswerIndex] = useState<string>('')
  const [question, setQuestion] = useState<QuestionObject | null>(null)

  const answered = (answer: Answer) => {
    if (state === GameState.WaitingForAnswer) {
      onAnswer(answer.correct)
      setAnswerIndex(answer.index)
    }
  }

  useEffect(() => {
    const getQuestions = () => {
      questionsService.getNextQuestion(difficulty, categories)
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
            } else {
              ans.push({
                answer: res.incorrectAnswers[ansIndex++],
                index: index,
                correct: false,
              })
            }
          }

          setQuestion(res)
          setAnswerIndex('')
          setAnswers(ans)
        })
    }
    if (!questionsService.loading && state === GameState.WaitingForAnswer) {
      getQuestions()
    }
  }, [categories, difficulty, state])

  return <>
    <h2>Question {questionCount > 0 ? questionCount : ''}</h2>
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
              return <button
                className={'quiz-answer-button' + (answerIndex !== '' && answerIndex === answer.index ? answer.correct ? ' quiz-answer-button-right' : ' quiz-answer-button-wrong' : '')}
                key={'quiz-answer-button-' + i}
                onClick={() => answered(answer)}
              >
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
