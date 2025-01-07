export const List = ({ person, handleDelete }) => {
    const deleter = () => {
        if(window.confirm(`Delete ${person.name}?`)) {
            handleDelete(person.id)
        }
    }
    return (
            <p>{person.name}    {person.number} <button onClick={deleter}>Delete</button></p>
    )
}