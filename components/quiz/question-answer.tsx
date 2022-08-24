import { memo } from 'react'
import AnswerButtons from '../../components/quiz/answer-buttons'

export type QuestionObject = {
  category: string,
  id: string,
  correctAnswer: string,
  incorrectAnswers: Array<string>,
  question: string,
  tags: Array<string>,
  type: string,
  difficulty: string,
  regions: Array<string>
}

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
