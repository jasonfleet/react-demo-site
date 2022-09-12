import useSWR from 'swr'

// import wea

const fetcher = (url: string) => fetch(url).then(res => res.json())


interface Category {
  category: Array<string>,
  // selected: boolean,
}

interface WeatherPlusProps {
  lat: string,
  lon: string,
}

const WeatherSWR = ({lat, lon}: WeatherPlusProps) => {
  const { data, error } = useSWR(`api/weather`, fetcher)

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default WeatherSWR
