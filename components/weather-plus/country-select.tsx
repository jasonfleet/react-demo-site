import { ChangeEvent } from "react"
import CountrySWR, { Country, CountryList } from "./country-swr"

interface CountryProps {
  onSelect: Function,
}

const CountrySelect = ({ onSelect }: CountryProps) => {
  const countryList: CountryList = CountrySWR()

  const select = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  }

  return <div>
    <label htmlFor='city-select'>Country</label>

    <select name='city-select' onChange={(e: ChangeEvent<HTMLSelectElement>) => select(e)}>
      <option value=''></option>
      {countryList && countryList.countries &&
        countryList.countries.map((country: Country, i: number) => {
          return <option
            key={'country-select-' + i}
            value={i}
          >
            {country.name}
          </option>
        })
      }
    </select>
  </div>
}

export default CountrySelect
