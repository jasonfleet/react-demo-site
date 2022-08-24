import useSWR from 'swr'

const fetcher = async (url: string) => await fetch(url).then(res => res.json())

interface Category {
  category: Array<string>,
  // selected: boolean,
}

export type QuizCategories = {
  categories: Category,
  isLoading: boolean,
  isError: any | null
}

function Categories () {
  const { data, error } = useSWR(
    `https://the-trivia-api.com/api/categories`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )

  if (error) <p>Loading failed...</p>
  if (!data) <h1>Loading...</h1>

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default Categories
