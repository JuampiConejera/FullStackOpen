export const CountriesList = ( { filters, countries}) => {
    const countriesToShow = countries.filter(country => 
        country.name.common.toLowerCase().includes(filters.toLowerCase)
    )
    return (
        <div>
            {countriesToShow.map(() => {
                
            })}
        </div>
    )
}