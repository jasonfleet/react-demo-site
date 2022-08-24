import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export type City = {
  city: string,
  lat: string,
  lng: string,
  country: string,
  iso2: string,
  admin_name: string,
  capital: string,
  population: string,
  population_proper: string,
}

export type CityList = {
  cities: Array<City>,
  isLoading: boolean,
  isError: any | null,
}

const CitiesSWR = () => {
  const { data, error } = useSWR(`/api/cities`, fetcher)

  return {
    cities: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default CitiesSWR
