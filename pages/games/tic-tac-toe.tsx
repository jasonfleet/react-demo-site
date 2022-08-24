import { useState } from 'react'
import Layout from '../../components/layout'

const checkGrid = (grid: Array<string>) => {
  return true
}

function TicTacToe() {
  const [gameStatus, setGameStatus] = useState<string>('ready')
  const [grid, setGrid] = useState<Array<string>>([])

  const clickedOn = (index: number) => {
    if (gameStatus === 'ready') {
      let game = [...grid]

      game[index] = 'o'

      let free = []

      for (let i = 0; i < 9; i++) {
        if (game[i] !== 'x' && game[i] !== 'o') {
          free.push(i)
        }
      }
      console.log(free)

      if (free.length == 0) {
        setGameStatus('game over')
      } else {
        let r = Math.floor((Math.random() * (free.length - 1)))
        console.log(free[r])
        game[free[r]] = 'x'

        setGrid([...game])
      }
    }
  }

  // useEffect(() => {
  //   if (player === 'computer') {
  //     while (true) {
  //       let r = (Math.random() * 9) - 1
  //       if (grid[r] === '') {
  //         grid[r] = 'x'
  //         setGrid([...grid])
  //         break
  //       }
  //     }
  //   }
  // }, [grid, player])

  return <Layout classStyle='tic-tac-toe'>
    <div>
      <div className='title'>Tic-Tac-Toe</div>
      <div className='grid h-max place-content-center'>

        <div className='my-3 grid grid-cols-3 place-content-center'>

          <div className='grid place-content-center border-b border-r h-24 w-24' onClick={() => clickedOn(0)}>
              <div>{grid[0] === 'x' ? 'X' : grid[0] === 'o' ? 'O' : ''}</div>
          </div>
          <div className='grid place-content-center border-b h-24 w-24' onClick={() => clickedOn(1)}>
              <div>{grid[1] === 'x' ? 'X' : grid[1] === 'o' ? 'O' : ''}</div>
          </div>
          <div className='grid place-content-center border-b border-l h-24 w-24' onClick={() => clickedOn(2)}>
              <div>{grid[2] === 'x' ? 'X' : grid[2] === 'o' ? 'O' : ''}</div>
          </div>

          <div className='grid place-content-center border-r h-24 w-24' onClick={() => clickedOn(3)}>
              <div>{grid[3] === 'x' ? 'X' : grid[3] === 'o' ? 'O' : ''}</div>
          </div>
          <div className='grid place-content-center h-24 w-24' onClick={() => clickedOn(4)}>
              <div>{grid[4] === 'x' ? 'X' : grid[4] === 'o' ? 'O' : ''}</div>
          </div>
          <div className='grid place-content-center border-l h-24 w-24' onClick={() => clickedOn(5)}>
              <div>{grid[5] === 'x' ? 'X' : grid[5] === 'o' ? 'O' : ''}</div>
          </div>

          <div className='grid place-content-center border-t border-r h-24 w-24' onClick={() => clickedOn(6)}>
              <div>{grid[6] === 'x' ? 'X' : grid[6] === 'o' ? 'O' : ''}</div>
          </div>
          <div className='grid place-content-center border-t h-24 w-24' onClick={() => clickedOn(7)}>
              <div>{grid[7] === 'x' ? 'X' : grid[7] === 'o' ? 'O' : ''}</div>
          </div>
          <div className='grid place-content-center border-t border-l h-24 w-24' onClick={() => clickedOn(8)}>
              <div>{grid[8] === 'x' ? 'X' : grid[8] === 'o' ? 'O' : ''}</div>
          </div>
        </div>
      </div>

      <div>
        {gameStatus === 'ready' && <span>ready</span>}
      </div>
    </div>
  </Layout>
}

export default TicTacToe
