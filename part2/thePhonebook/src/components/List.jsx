export const List = ({ person, handleDelete }) => {
    return (
            <p>{person.name}    {person.number} <button type="button" onClick={() => handleDelete(person)}>Delete</button></p>
    )
}