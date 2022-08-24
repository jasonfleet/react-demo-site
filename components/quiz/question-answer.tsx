import { memo } from 'react'
import AnswerButtons from '../../components/quiz/answer-buttons'
import { QuestionObject } from './questions-swr'

interface QuestionsProps {
  question: QuestionObject,
}

const QuestionAnswer = ({ question }: QuestionsProps) => {
  return <>
    <h2>Question</h2>
    {
      question && <div>
        <div className='quiz-question'>{question.question}</div>
      </div>
    }
  </>
}

export default memo(QuestionAnswer)
