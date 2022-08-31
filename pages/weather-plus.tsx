import { useState } from 'react'
import Layout from '../components/layout'
import CityDetail from '../components/weather-plus/city-detail'
// import CitySelect from '../components/weather-plus/city-select'
// import { City } from '../components/weather-plus/city-swr'
import CountrySelect from '../components/weather-plus/country-select'
import { Country } from '../components/weather-plus/country-swr'

function WeatherPlus() {
  // const [selectedCity, setSelectedCity] = useState<City | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

  // const selectCity = (city: City) => {
  //   setSelectedCity(city)
  // }

  const selectCountry = (country: Country) => {
    setSelectedCountry(country)
  }

  return <Layout>
    <div className='weather'>
    <div className='title'>Weather Plus</div>

    <div className='flex flex-auto'>
      <div className='grid'>
        <CountrySelect onSelect={(country: Country) => selectCountry(country)} />
        {/* <CityDetail city={selectedCity} /> */}
      </div>
      <div className='grid'>
        {/* <CitySelect country={selectedCountry} onSelect={(city: City) => selectCity(city)} />
        <CityDetail city={selectedCity} /> */}
      </div>
    </div>
    </div>
  </Layout>
}

export default WeatherPlus
