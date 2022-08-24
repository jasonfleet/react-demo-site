import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Categories from '../../components/quiz/categories'
import Difficulty from '../../components/quiz/difficulty'
import Info from '../../components/quiz/info'
import QuestionLimit from '../../components/quiz/question-limit'
import QuestionAnswer from '../../components/quiz/question-answer'
import Score from '../../components/quiz/score'
import QuestionsSWR, { QuestionObject, QuizQuestions } from '../../components/quiz/questions-swr'

enum State  {
  GameOver,
  WaitingForAnswer,
  WaitingToStart,
  WaitingToContinue,
}

function Quiz() {
  const [difficulty, setDifficulty] = useState<string>('easy')
  const [question, setQuestion] = useState<QuestionObject | null>(null)
  const [questionLimit, setQuestionLimit] = useState<number>(3)
  const [score, setScore] = useState<number>(0)
  const [state, setState] = useState<State>(State.WaitingToStart)

  const questions: QuizQuestions = QuestionsSWR(difficulty, questionLimit)

  const changeDifficulty = (newDifficulty: string) => {
    if (state === State.WaitingToStart) {
      setDifficulty(newDifficulty)
    }
  }

  const changeLimit = (newLimit: number) => {
    if (state === State.WaitingToStart && newLimit >= 3  && newLimit <= 10) {
      setQuestionLimit(newLimit)
    }
  }

  const continueQuiz = () => {
    setState(State.WaitingForAnswer)
  }

  const endGame = () => {
    setState(State.GameOver)
  }

  const onCategoryClick = (category: string) => {
    console.log(category)
  }

  const onAnswer = (correct: boolean) => {
    if (correct) {
      setScore(score + 1)
    }
  }

  const startGame = () => {
    setScore(0)
    setState(State.WaitingForAnswer)
  }

  return <Layout classStyle='quiz'>
    <Info />
    <div className='title'>Quiz</div>
    <div className='grid grid-cols-3'>
      <div>
        <Categories onChange={(category: string) => onCategoryClick(category)} disabled={state !== State.WaitingToStart} />
      </div>

      <div className='flex flex-col'>
          {question && <QuestionAnswer question={question} />}
      </div>

      <div className='space-y-7'>
        <Score score={score} />
        <QuestionLimit onChange={(questionLimit: number) => changeLimit(questionLimit)} disabled={state !== State.WaitingToStart && state !== State.WaitingForAnswer} questionLimit={questionLimit} />
        <Difficulty onChange={(difficulty: string) => changeDifficulty(difficulty)} difficulty={difficulty} disabled={state !== State.WaitingToStart && state !== State.GameOver} />
      </div>

      <div className='col-start-2'>
        {(state === State.WaitingToStart || state === State.GameOver) && <button className='quiz-big-button mt-12 ' onClick={() => startGame()} type='button'>Start</button>}
        {state === State.WaitingToContinue && <button className='quiz-big-button mt-12' onClick={() => continueQuiz()} type='button'>Continue</button>}
      </div>
    </div>

  </Layout>
}

export default Quiz
