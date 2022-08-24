import useSWR from 'swr'

const fetcher = (url: string) => fetch(url, { headers: {'X-Api-Key': 'eSm0r3hl+5zene41MmLvew==HsJrTZtuCOgx1mPr'}}).then(res => res.json())

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
  city: Array<City>,
  isLoading: boolean,
  isError: any | null,
}

interface CityProps {
  name: string | null
}

const CitySWR = ({ name }: CityProps) => {
  const { data, error } = useSWR(name ? `https://api.api-ninjas.com/v1/city?name=${name}` : null, fetcher)

  return {
    city: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default CitySWR
