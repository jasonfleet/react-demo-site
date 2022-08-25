import { useState } from 'react'

const fetcher = async (url: string) => await fetch(url).then(res => res.json())

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

// export type QuizQuestions = {
//   questions: Array<QuestionObject> | [],
//   isLoading: boolean,
//   isError: any | null
// }

interface QuestionsCache {
  [key: string]: Array<QuestionObject>,
}

interface QuestionsProps {
  difficulty: string,
}

function Questions ({difficulty}: QuestionsProps) {
  const [cache, setCache] = useState<QuestionsCache>({})
  const [data, setData] = useState<QuestionObject | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [size, setSize] = useState<number>(5)

  if (!loading && (!cache.hasOwnProperty(difficulty) || cache[difficulty].length === 0)) {
    setLoading(true)

    const fetched = fetcher(
      `https://the-trivia-api.com/api/questions?difficulty=${difficulty}&limit=${size}`
    )
    .then(result => {
      console.log(result)
      setCache({ difficulty: result})
      setData(cache[difficulty][0])
    })
  }

  console.log('fetch', data)

  return data
}

export default Questions
