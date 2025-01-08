export const CountriesList = ( { filters, countries } ) => {
    const countriesToShow = countries.filter(country => 
        country.name.common.toLowerCase().includes(filters.toLowerCase()))
        
    if (countriesToShow.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }
    return (
        <div>
            {countriesToShow.map(country => (
                <p key={country.name.common}> {country.name.common} </p>                
            ))}
        </div>
    )
}