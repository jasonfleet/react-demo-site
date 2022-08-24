
interface ScoreProps {
  score: number,
}

const Score = ({ score }: ScoreProps) => {

  return <div>
    <h2>Score</h2>
    <div className='quiz-score'>{score}</div>
  </div>
}

export default Score
