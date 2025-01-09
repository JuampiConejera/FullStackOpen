import { useState, useEffect } from 'react'

import listService from './services/list'

import { Filter } from './components/Filter'
import { CountriesList } from './components/Countries'
import { Country } from './components/Country'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  
  const countriesToShow = countries.filter(countries =>
    countries.name.common.toLowerCase().includes(filter.toLowerCase()));

    const handleClick = (e) => {
      e.preventDefault()
      console.log(e.target.value)
      setFilter(e.target.name)
    }

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
        {countriesToShow.length !== 1 
          ? <CountriesList setFilter={setFilter} filters={filter} countries={countries} handleClick={handleClick} />
          : <Country country={countriesToShow[0]} />}
    </div>
  )
}

export default App
