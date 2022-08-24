
interface QuestionLimitProps {
  onChange: Function,
  disabled: boolean,
  questionLimit: number,
}

const QuestionLimit = ({ onChange, disabled, questionLimit }: QuestionLimitProps) => {

  return <div className='flex flex-col'>
    <h2>Question Limit</h2>
    <div className='mx-auto'>
      <div className='inline-block'>
        <button className='quiz-button' disabled={disabled} onClick={() => onChange(questionLimit - 1)}>-</button>
        <span className='quiz-question-limit'>{questionLimit === 0 ? '-' : questionLimit}</span>
        <button className='quiz-button' disabled={disabled} onClick={() => onChange(questionLimit + 1)}>+</button>
      </div>
    </div>
  </div>
}

export default QuestionLimit
