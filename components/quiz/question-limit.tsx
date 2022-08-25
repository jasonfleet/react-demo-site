
interface QuestionLimitProps {
  onChange: Function,
  disabled: boolean,
  limit: number,
}

const QuestionLimit = ({ onChange, disabled, limit }: QuestionLimitProps) => {

  return <div className='flex flex-col'>
    <h2>Question Limit</h2>
    <div className='mx-auto'>
      <div className='inline-block'>
        <button className='quiz-button' disabled={disabled} onClick={() => onChange(limit - 1)}>-</button>
        <span className='quiz-question-limit'>{limit === 0 ? '-' : limit}</span>
        <button className='quiz-button' disabled={disabled} onClick={() => onChange(limit + 1)}>+</button>
      </div>
    </div>
  </div>
}

export default QuestionLimit
