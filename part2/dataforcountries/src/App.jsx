import { useState, useEffect } from 'react'

import listService from './services/list'
import axios from 'axios'

import { Filter } from './components/Filter'
import { CountriesList } from './components/Countries'
import { Country } from './components/Country'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState({})
  
  const countriesToShow = countries.filter(countries =>
    countries.name.common.toLowerCase().includes(filter.toLowerCase()));
    
  const handleClick = (e) => {
    e.preventDefault()
    setFilter(e.target.name)
  }
  
  useEffect(() => {
    listService
    .getAll()
    .then(data => {
      setCountries(data)
    })
    .catch(error => {
      console.error('Error countries:', error)
    })
  }, [] )
  
  useEffect(() => {
    const api_key = import.meta.env.VITE_SOME_KEY

    const countriesToShow = countries.filter(countries =>
      countries.name.common.toLowerCase().includes(filter.toLowerCase()));

    if (countriesToShow.length === 1) {
      const country = countriesToShow[0]

      console.log(`fetching weather for${country.capital}`)
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`)
        .then(response => {
          setWeather(response.data)
        })
        .catch(error => {
          console.error('Error weather: ', error)
        })
    } else {
      console.log('countriestoshow length is not 1:', countriesToShow.length)
    }
  }, [countries, filter] )
  return (
    <div>
        <Filter filter={filter} setFilter={setFilter} />
        {countriesToShow.length !== 1 
          ? <CountriesList setFilter={setFilter} filters={filter} countries={countries} handleClick={handleClick} />
          : <Country country={countriesToShow[0]} setFilter={setFilter} weather={weather} />}
    </div>
  )
}

export default App
