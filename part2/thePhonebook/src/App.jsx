import { useState, useEffect } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { Notification } from './components/Notification'

import listService from './services/ListNumbers'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState({ text: null, type: ''})

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
                setMessage({ text: `Deleted ${person.name}`, type: 'success'})
                setTimeout(() => {
                  setMessage({ text: null, type: ''})
                }, 3000);
            })
            .catch(() => {
              setMessage({ text: `Failed to delete ${person.name}`, type: 'error' })
              setTimeout(() => {
                setMessage(() => {
                  setMessage({ text: null, type: ''})
                })
              }, 3000);
            })
    }
}

  return (
    <div>
      <Notification message={message} />
      <h2>PhoneBook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>Add a new</h3>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setMessage={setMessage}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  )
}
export default App