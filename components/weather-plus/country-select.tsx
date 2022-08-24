import CountrySWR, { Country, CountryList } from './country-swr'

interface CountryProps {
  onSelect: Function,
}

const CountrySelect = ({ onSelect }: CountryProps) => {
  const countryList: CountryList = CountrySWR()

  return <div>
    <label htmlFor='city-select'>Country</label>
    <select name='city-select' onChange={event => onSelect(countryList.countries[parseInt(event.target.value)])}>
      {countryList && countryList.countries &&
        countryList.countries.map((country: Country, i: number) => <option key={'country-select-' + i} value={i}>
          {country.Results.Name}
        </option>)
      }
    </select>
  </div>
}

export default CountrySelect
