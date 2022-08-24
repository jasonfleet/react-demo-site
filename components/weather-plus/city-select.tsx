import CitiesSWR, { City, CityList } from './cities-swr'

interface CityProps {
  country: string | null,
  onSelect: Function,
}

const CitySelect = ({ country, onSelect }: CityProps) => {
  const cityList: CityList = CitiesSWR()

  return <div>
    <label htmlFor='city-select'>City</label>
    <select name='city-select' onChange={event => onSelect(cityList.cities[parseInt(event.target.value)])}>
      {cityList && country && cityList.cities &&
        cityList.cities.filter((city: City) => city.country === country).map((city: City, i: number) => <option className='bg-inherit' key={'city-select-' + i} value={i}>{city.city}</option>)
      }
    </select>
  </div>
}

export default CitySelect
