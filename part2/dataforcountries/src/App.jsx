import { useState, useEffect } from 'react'

import listService from './services/list'

import { Filter } from './components/Filter'
import { CountriesList } from './components/Countries'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  useEffect(() => {
    listService
      .getAll()
      .then(data => {
        setCountries(data)
      })
  }, [])
  return (
    <div>
        {/* {countries.map(country => (
          <div key={country.name}>
            {country.name.common}  
          </div>
        ))} */}
        <Filter filter={filter} setFilter={setFilter} />
        <CountriesList filter={filter} countries={countries} />
    </div>
  )
}

export default App
