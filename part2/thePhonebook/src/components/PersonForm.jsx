export const PersonForm = ( {newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
    const addPersons = (e) => {
        e.preventDefault()
        if(persons.some(person => person.name === newName)) alert(`${newName} is already added to phonebook`)
        else {
          const personObject = {
            name: newName,
            number: newNumber
          }
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
        }
    }

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value)
    }
    
    return (
        <form onSubmit={addPersons}>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange}/>
            </div>
            <div>
                <button>add</button>
            </div>
        </form>
    )
}