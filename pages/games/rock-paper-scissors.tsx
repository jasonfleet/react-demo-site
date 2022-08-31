import Image from 'next/image'
import Layout from '../../components/layout'
import paper from '../../public/images/paper.png'
import scissors from '../../public/images/scissors.png'
import rock from '../../public/images/rock.png'
import { useEffect, useState } from 'react'

enum Choices {
  none,
  rock,
  paper,
  scissors
}
enum Results {
  none,
  draw,
  won,
  lost
}

const choicesList: Array<Choices> = [Choices.rock, Choices.paper, Choices.scissors]

function RockPaperScissors() {
  const [computerChoice, setComputerChoice] = useState<Choices>(Choices.none)
  const [timer, setTimer] = useState<number>(3)
  const [userChoice, setUserChoice] = useState<Choices>(Choices.none)
  const [result, setResult] = useState<Results>(Results.none)


  const playerChose = (c: Choices) => {
    if (timer !== 0) {
      setUserChoice(c)
    }
  }

  const play = () => {
    setTimer(3)
    setUserChoice(Choices.none)
    setComputerChoice(Choices.none)
    setResult(Results.none)
  }

  useEffect(() => {
    const timeout = () => {
      setTimeout(() => { setTimer(timer - 1)}, 1000)
    }

    if (timer > 0) {
      timeout()
    } else if (timer === 0) {
      let c = Math.floor(Math.random() * 3)
      setComputerChoice(choicesList[c])
    }
  }, [timer])

  useEffect(() => {
    if (timer === 0) {
      if (computerChoice === userChoice) {
        setResult(Results.draw)
      } else {
        switch (userChoice) {
          case Choices.none:
            setResult(Results.lost)
            break
          case Choices.rock:
            setResult(computerChoice === Choices.scissors ? Results.won : Results.lost)
            break
          case Choices.paper:
              setResult(computerChoice === Choices.rock ? Results.won : Results.lost)
            break
          case Choices.scissors:
            setResult(computerChoice === Choices.paper ? Results.won : Results.lost)
            break
          }
        }
    }
  }, [computerChoice, timer, userChoice])

  return <Layout>
    <div className='title'>Rock-Paper-Scissors</div>

    <br />
    <br />

    <div className='rock-paper-scissors'>
      <div className='timer h-36'>
        {timer > 0
          ? <span className='inline-block mt-4'>{timer}</span>
          :
            computerChoice === 1 ? <Image alt='ROCK' height='105px' layout='intrinsic' src={rock} width='105px' /> :
            computerChoice === 2 ? <Image alt='PAPER' height='105px' layout='intrinsic' src={paper} width='105px'  /> :
            computerChoice === 3 ? <Image alt='SCISSORS' height='105px' layout='intrinsic' src={scissors} width='105px' /> : null
        }
      </div>

      { timer === 0 ? <button className='play-button' onClick={() => play()} type='button'>Play</button> : <div className='choose'>Choose...</div> }

      <div className='flex flex-auto gap-12'>
        <div className={'' + (userChoice === Choices.none ? '' : userChoice !== Choices.rock ? ' opacity-50' : '')} onClick={() => playerChose(Choices.rock)}><Image alt='ROCK' height='105px' layout='intrinsic' src={rock} width='105px' /></div>
        <div className={'' + (userChoice === Choices.none ? '' : userChoice !== Choices.paper ? ' opacity-50' : '')} onClick={() => playerChose(Choices.paper)}><Image alt='PAPER' height='105px' layout='intrinsic' src={paper} width='105px' /></div>
        <div className={'' + (userChoice === Choices.none ? '' : userChoice !== Choices.scissors ? ' opacity-50' : '')} onClick={() => playerChose(Choices.scissors)}><Image alt='SCISSORS' height='105px' layout='intrinsic' src={scissors} width='105px' /></div>
      </div>

      {timer === 0 && result !== Results.none
        ? <div className='result'>{result === Results.draw ? 'Draw' : result === Results.won ? 'You Won' : 'You Lost'}</div>
        : null
      }
    </div>

  </Layout>
}

export default RockPaperScissors
