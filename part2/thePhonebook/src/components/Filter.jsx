export const Filter = ( {filter, setFilter}) => {

    const handleFilterChange = (e) => {
    setFilter(e.target.value)
  } //actualiza por cada cambio en el input

    return (
        <div>
            Filter shown with<input value={filter} onChange={handleFilterChange} />
        </div>
    )
}