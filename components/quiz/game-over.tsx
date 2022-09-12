import { useState } from "react"

interface GameOverProps {
  limit: number,
  onStartGame: Function,
  score: number,
}

const GameOver = ({ limit, onStartGame, score}: GameOverProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const startGame = () => {
    onStartGame()
  }

  return <div className='backdrop-blur-sm absolute top-0 left-0 w-full h-full'>
    <div className='grid h-full w-full place-content-center'>
      <div className='bg-slate-700 drop-shadow-2xl border-2 p-4 rounded-xl text-center h-60 w-60'>
        <h2>GameOver</h2>
        <p>You correctly answered<br/>{ score } of { limit } questions</p>
        <button className='quiz-big-button mt-12 ' onClick={() => startGame()} type='button'>OK</button>
      </div>
    </div>
  </div>
}

export default GameOver
