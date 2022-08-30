import Image from 'next/image'
import Layout from '../../components/layout'
import paper from '../../public/images/paper.png'
import scissors from '../../public/images/scissors.png'
import rock from '../../public/images/rock.png'

function RockPaperScissors() {
  return <Layout>
    <div className='title'>Rock-Paper-Scissors</div>
    <div className='grid grid-flow-col grid-cols-3 gap-4'>
      <div><Image alt='ROCK' height='210px' layout='intrinsic' src={rock} width='210px' /></div>
      <div><Image alt='PAPER' height='210px' layout='intrinsic' src={paper} width='210px' /></div>
      <div><Image alt='SCISSORS' height='210px' layout='intrinsic' src={scissors} width='210px' /></div>
      </div>
  </Layout>
}

export default RockPaperScissors
