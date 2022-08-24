import { useState } from "react"

interface CountryProps {
  onSelect: Function,
}

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
  countries: Array<Country> | [],
  isLoading: boolean,
  isError: any | null,
}

const CountrySelect = ({ onSelect }: CountryProps) => {
  const [countryList, setCountryList] = useState<CountryList | null>(null)

  return <div>
    <label htmlFor='city-select'>Country</label>
    <select name='city-select'>
      {countryList &&
        countryList.countries.map((country: Country, i: number) => <option key={'country-select-' + i} value={i}>
          {country.Results.Name}
        </option>)
      }
    </select>
  </div>
}

export default CountrySelect
