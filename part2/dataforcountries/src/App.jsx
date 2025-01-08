import { useState, useEffect } from 'react'

import listService from './services/list'

import { Filter } from './components/Filter'
import { CountriesList } from './components/Countries'
import { Country } from './components/Country'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  
  const countriesShow = countries.filter(countries =>
    countries.name.common.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    listService
      .getAll()
      .then(data => {
        setCountries(data)
      })
  }, [] )

  return (
    <div>
        {/* {countries.map(country => (
          <div key={country.name}>
            {country.name.common}  
          </div>
        ))} */}
        <Filter filter={filter} setFilter={setFilter} />
        {countriesShow.length !== 1 
          ? <CountriesList filters={filter} countries={countries} />
          : <Country country={countriesShow[0]} />}
    </div>
  )
}

export default App
