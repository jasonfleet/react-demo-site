import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

const APIKey = '6b88caafdaa4c85e42dc795ca5a9ae58'

interface Category {
  category: Array<string>,
  // selected: boolean,
}

export type QuizCategories = {
  categories: Category,
  isLoading: boolean,
  isError: any | null
}

interface WeatherPlusProps {
  lat: string,
  lon: string,
}

const WeatherSWR = ({lat, lon}: WeatherPlusProps) => {
  const { data, error } = useSWR(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`, fetcher)

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default WeatherSWR
