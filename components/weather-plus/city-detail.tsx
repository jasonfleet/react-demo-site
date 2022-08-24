import { City } from './cities-swr'

interface CityProps {
  city: City | null,
}

const CityDetail = ({ city }: CityProps) => {

  return <div>
    {city && <div className='city-detail'>
        <div>City:</div><div>{city.city}</div>
        <div>Country:</div><div>{city.country}</div>
        <div>Latitude:</div><div>{city.lat}</div>
        <div>Longitude:</div><div>{city.lng}</div>
        <div>Population:</div><div>{city.population}</div>
    </div>
    }
  </div>
}

export default CityDetail
