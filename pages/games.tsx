import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/layout'

//

const Games: NextPage = () => {
  return <Layout>
    <div className='games'>
    <div className='grid grid-cols-1 justify-items-stretch mx-2 px-2'>
      <div className='title'>Games</div>
      <div>
        <Link href="games/quiz">
          <a>Quiz</a>
        </Link>
      </div>
      <div>
        <Link href="games/rock-paper-scissors">
          <a>Rock, Paper, Scissors</a>
        </Link>
      </div>
      {/* <div>
        <Link href="games/tic-tac-toe">
          <a>Tic-Tac-Toe</a>
        </Link>
      </div> */}
    </div>
    </div>
  </Layout>
}

export default Games
