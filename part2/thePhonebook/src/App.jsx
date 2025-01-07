import { useState, useEffect } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

import listService from './services/ListNumbers'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {
    listService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
        listService
            .remove(person.id)
            .then(() => {
                setPersons(persons.filter(pers => pers.id !== person.id))
            })
    }
}

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>Add a new</h3>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  )
}
export default App