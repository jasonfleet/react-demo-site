import useSWR from 'swr'

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

export type QuizQuestions = {
  questions: QuestionObject,
  isLoading: boolean,
  isError: any | null
}

function Questions (difficulty: string, limit: number) {
  const { data, error } = useSWR(
    `https://the-trivia-api.com/api/questions?difficulty=${difficulty}&limit=${limit}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )

  if (error) <p>Loading failed...</p>
  if (!data) <h1>Loading...</h1>

  return {
    questions: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default Questions
