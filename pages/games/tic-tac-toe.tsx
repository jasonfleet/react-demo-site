import { useEffect, useState } from 'react'
import Layout from '../../components/layout'

enum GameState {
  Draw,
  Lost,
  Ready,
  Won,
}

const Winners = [
  7, 56, 448,
  73, 146, 292,
  273, 84
]

function TicTacToe() {
  const [gameStatus, setGameStatus] = useState<GameState>(GameState.Ready)
  const [grid, setGrid] = useState<Array<string>>([])

  const hasWon = (playArea: Array<string>, player: string) => {
    let score = 0
    let won = false

    playArea.forEach((value: string, index: number) => {
      score += (value === player ? (2 ** index) : 0)
    })

    Winners.forEach(((value: number) => {
      if ((value & score) === value) {
        won = true
      }
    }))

    return won
  }

  const clickedOn = (index: number) => {
    if (gameStatus === GameState.Ready && grid[index] === undefined) {
      let playArea = [...grid]

      playArea[index] = 'o'

      if (hasWon(playArea, 'o') === true) {
        setGameStatus(GameState.Won)
        setGrid([...playArea])

        return
      }

      let free = []

      for (let i = 0; i < 9; i++) {
        if (playArea[i] !== 'x' && playArea[i] !== 'o') {
          free.push(i)
        }
      }

      if (free.length == 0) {
        setGameStatus(GameState.Draw)
      } else {
        let r = Math.floor((Math.random() * (free.length - 1)))
        // console.log(free[r])
        playArea[free[r]] = 'x'
      }

      if (hasWon(playArea, 'x') === true) {
        setGameStatus(GameState.Lost)
      }

      setGrid([...playArea])
    }
  }


  const reset = () => {
    setGrid([])
    setGameStatus(GameState.Ready)
  }

  return <Layout>
    <div>
      <div className='title'>Tic-Tac-Toe</div>
      <div className='grid h-max place-content-center'>

        <div className='my-3 grid grid-cols-3 place-content-center'>

          <div className='grid place-content-center border-b border-r h-24 w-24' onClick={() => clickedOn(0)}>
            <div>{grid[0]}</div>
          </div>
          <div className='grid place-content-center border-b h-24 w-24' onClick={() => clickedOn(1)}>
            <div>{grid[1]}</div>
          </div>
          <div className='grid place-content-center border-b border-l h-24 w-24' onClick={() => clickedOn(2)}>
            <div>{grid[2]}</div>
          </div>

          <div className='grid place-content-center border-r h-24 w-24' onClick={() => clickedOn(3)}>
            <div>{grid[3]}</div>
          </div>
          <div className='grid place-content-center h-24 w-24' onClick={() => clickedOn(4)}>
            <div>{grid[4]}</div>
          </div>
          <div className='grid place-content-center border-l h-24 w-24' onClick={() => clickedOn(5)}>
            <div>{grid[5]}</div>
          </div>

          <div className='grid place-content-center border-t border-r h-24 w-24' onClick={() => clickedOn(6)}>
            <div>{grid[6]}</div>
          </div>
          <div className='grid place-content-center border-t h-24 w-24' onClick={() => clickedOn(7)}>
            <div>{grid[7]}</div>
          </div>
          <div className='grid place-content-center border-t border-l h-24 w-24' onClick={() => clickedOn(8)}>
            <div>{grid[8]}</div>
          </div>
        </div>
      </div>

      <div>
        <div className='tic-tac-toe-status cursor-pointer' onClick={() => reset()}>
          {gameStatus === GameState.Ready && <span>Ready<br />Click to Play</span>}
          {gameStatus === GameState.Lost && <span>You Lost<br />Click Here to Play Again</span>}
          {gameStatus === GameState.Won && <span>You Won<br />Click Here to Play Again</span>}
        </div>
      </div>
    </div>
  </Layout>
}

export default TicTacToe
