import { memo, useEffect, useState } from "react"

const useFetchQuestions = (difficulty: string, limit: number ) => {
  const [questions, setQuestions] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    console.group('here 1')

    const fetchQuestions = async () => {
      await fetch(`https://the-trivia-api.com/api/questions?difficulty=${difficulty}&limit=${limit}`)
      .then(response => response.json())
      .then(response => {
        setQuestions(response)
        console.group('here 3')
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        console.group('here 4')
      })
    }

    if (!loading){
      setLoading(true)
      fetchQuestions()
    }

  }, [difficulty, limit, loading])

  return [loading, questions];
}

export default useFetchQuestions
