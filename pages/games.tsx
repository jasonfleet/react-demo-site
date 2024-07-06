import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/layout'

const Games: NextPage = () => {
  return (
    <Layout>
      <div className='games'>
        <div className='grid grid-cols-1 justify-items-stretch mx-2 px-2'>
          <div className='title'>Games</div>
          <div>
            <Link href="games/maze">
              Maze
            </Link>
          </div>
          <div>
            <Link href="games/quiz">
              Quiz
            </Link>
          </div>
          <div>
            <Link href="games/rock-paper-scissors">
              Rock, Paper, Scissors
            </Link>
          </div>
          <div>
            <Link href="games/tic-tac-toe">
              Tic-Tac-Toe
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Games
