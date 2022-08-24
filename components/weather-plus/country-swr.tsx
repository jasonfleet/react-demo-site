import useSWR from 'swr'

// const fetcher = (url: string) => fetch(url).then(res => res.json())
const fetcher = (url: string) => fetch(url, { headers: {'X-Api-Key': 'eSm0r3hl+5zene41MmLvew==HsJrTZtuCOgx1mPr'}}).then(res => res.json())


export type Country = {
    StatusMsg: string,
    Results: {
      Name: string,
      Capital: {
        DLST: number,
        TD: number,
        Flg: number,
        Name: string,
        GeoPt: Array<number>,
    },
    GeoRectangle: {
      West: number,
      East:number,
      North: number,
      South: number,
    },
    SeqID: number,
    GeoPt: Array<number>,
    TelPref: number,
    CountryCodes: {
      tld: string,
      iso3: string,
      iso2: string,
      fips: string,
      isoN: number,
    },
    CountryInfo: string
  },
  StatusCode: number
}

export type CountryList = {
  countries: Array<Country>,
  isLoading: boolean,
  isError: any | null,
}

const CountrySWR = () => {
  const { data, error } = useSWR(`https://api.api-ninjas.com/v1/country`, fetcher)

  return {
    countries: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default CountrySWR
