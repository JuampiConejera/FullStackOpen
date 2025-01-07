import listService from '../services/ListNumbers'

export const PersonForm = ( {newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
    
    const toggleNumberOf = (person, newNumber) =>{
        const pers = persons.find(n => n.id === person.id)
        const changedNumber = { ...pers, number: newNumber }

        listService
            .update(person.id, changedNumber)
            .then(returnedList => {
                setPersons(persons.map(pers => pers.id !== person.id ? pers : returnedList))
            })

    }
    
    const addPersons = (e) => {
        e.preventDefault()
        if(persons.some(person => person.name === newName)) {
            const person = persons.find(pers => pers.name === newName);
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) 
                toggleNumberOf(person, newNumber)  
        } else {
          const personObject = {
            name: newName,
            number: newNumber
          }
          listService
            .create(personObject)
            .then(response => {
              setPersons(persons.concat(response.data))
            })
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