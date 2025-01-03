import { List } from './List'
export const Persons = ( {persons, filter}) => {
    const personsToShow = persons.filter(persons => 
        persons.name.toLowerCase().includes(filter.toLowerCase())
    )
    return (
        <div>
            {personsToShow.map(persons =>
                <List key={persons.name} person={persons} />
            )}
        </div>
    )
}