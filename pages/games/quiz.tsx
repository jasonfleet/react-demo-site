import { useState } from 'react'
import Categories from '../../components/quiz/categories'
import Difficulty from '../../components/quiz/difficulty'
import Info from '../../components/quiz/info'
import Layout from '../../components/layout'
import QuestionLimit from '../../components/quiz/question-limit'
import QuestionAnswer from '../../components/quiz/question-answer'
import Score from '../../components/quiz/score'
import GameOver from '../../components/quiz/game-over'

export enum GameState {
  GameOver,
  WaitingForAnswer,
  WaitingToStart,
  WaitingToContinue,
}

function Quiz() {
  const [difficulty, setDifficulty] = useState<string>('easy')
  const [limit, setLimit] = useState<number>(3)
  const [questionCount, setQuestionCount] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [state, setState] = useState<GameState>(GameState.WaitingToStart)

  const answered = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1)
    }
      setState(GameState.WaitingToContinue)
      setQuestionCount(questionCount + 1)
  }

  const changeDifficulty = (newDifficulty: string) => {
    if (state === GameState.WaitingToStart) {
      setDifficulty(newDifficulty)
    }
  }

  const changeLimit = (newLimit: number) => {
    if (state === GameState.WaitingToStart && newLimit >= 3 && newLimit <= 10) {
      setLimit(newLimit)
    }
  }

  const continueGame = () => {
    if (questionCount === limit) {
      setState(GameState.GameOver)
    } else {
      setState(GameState.WaitingForAnswer)
    }
  }

  const onCategoryClick = (category: string) => {
    console.log(category)
  }

  const startGame = () => {
    setScore(0)
    setQuestionCount(0)
    setState(GameState.WaitingForAnswer)
  }

  const endGame = () => {
    setScore(0)
    setQuestionCount(0)
    setState(GameState.WaitingToStart)
  }

  return <Layout>
    <Info />
    <div className='quiz'>
      <div className='title'>Quiz</div>
      <div className='grid grid-cols-3'>
        <div>
          <Categories onChange={(category: string) => onCategoryClick(category)} disabled={state !== GameState.WaitingToStart} />
        </div>

        <div className='flex flex-col'>
          <QuestionAnswer difficulty={difficulty} onAnswer={(isCorrect: boolean) => answered(isCorrect)} limit={limit} state={state} onEndGame={() => endGame() }/>
        </div>

        <div className='space-y-7'>
          <Score score={score} />
          <QuestionLimit onChange={(limit: number) => changeLimit(limit)} disabled={state !== GameState.WaitingToStart && state !== GameState.WaitingForAnswer} limit={limit} />
          <Difficulty onChange={(difficulty: string) => changeDifficulty(difficulty)} difficulty={difficulty} disabled={state !== GameState.WaitingToStart && state !== GameState.GameOver} />
        </div>

        <div className='col-start-2'>
          {state === GameState.GameOver && <GameOver limit={limit} onStartGame={() => endGame() } score={score} />}
          {state === GameState.WaitingToStart && <button className='quiz-big-button mt-12 ' onClick={() => startGame()} type='button'>Start</button>}
          {state === GameState.WaitingToContinue && <button className='quiz-big-button mt-12' onClick={() => continueGame()} type='button'>Continue</button>}
        </div>
      </div>
    </div>

  </Layout>
}

export default Quiz
