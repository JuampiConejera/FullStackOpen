export const Filter = ( { filter, setFilter }) => {
    
    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }
    return (
        <div>
            <p>find Countries <input value={filter} onChange={handleFilterChange} /> </p>
        </div>
    )
}