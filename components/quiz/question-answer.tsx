import { memo, useEffect, useState } from 'react'
import AnswerButtons from '../../components/quiz/answer-buttons'
import { State } from '../../pages/games/quiz'
import useQuestions, { QuestionObject, QuizQuestions } from './use-questions'

// interface QuestionsProps {
//   question: QuestionObject,
// }

interface QuestionsProps {
  difficulty: string,
  state: State,
}

const QuestionAnswer = ({ difficulty, state }: QuestionsProps) => {
  // const [question, setQuestion] = useState <QuestionObject | null > (null)

  const question: QuestionObject = useQuestions({
    difficulty: difficulty,
  })

  // useEffect(() => {
  //   console.log('effect')
  //   // if (questions && !questions.isLoading && !questions.isError) {
  //   console.log(question)
  // }, [difficulty])

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
