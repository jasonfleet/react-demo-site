import { memo, useEffect, useState } from 'react'
import AnswerButtons from '../../components/quiz/answer-buttons'
import { State } from '../../pages/games/quiz'
import { QuestionObject, QuestionServices } from './question-services'

interface QuestionsProps {
  difficulty: string,
  state: State,
}
const questionsService: QuestionServices = new QuestionServices()

const QuestionAnswer = ({ difficulty, state }: QuestionsProps) => {
  const [question, setQuestion] = useState<QuestionObject | null>(null)

  useEffect(() => {
    if (!questionsService.loading) {
      questionsService.getNextQuestion(difficulty)
        .then(res => setQuestion(res))
    }
  }, [difficulty, state])

  return <>
    <h2>Question</h2>
    {
      question && <div>
        <div className='quiz-question'>{question.question}</div>
        <AnswerButtons
          correctAnswer={question.correctAnswer}
          incorrectAnswers={question.incorrectAnswers}
          onAnswer={(correct: boolean) => { console.log(correct)}}
        />
      </div>
    }
  </>
}

export default QuestionAnswer
