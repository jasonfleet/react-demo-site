import useSWR from 'swr'

// const fetcher = (url: string) => fetch(url).then(res => res.json())
const fetcher = (url: string) => fetch(url, { headers: {'X-Api-Key': 'eSm0r3hl+5zene41MmLvew==HsJrTZtuCOgx1mPr'}}).then(res => res.json())



const CountrySWR = () => {
  const { data, error } = useSWR(`https://api.api-ninjas.com/v1/country`, fetcher)

  return {
    countries: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default CountrySWR
