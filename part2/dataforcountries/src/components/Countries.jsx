import { Country } from './Country'

export const CountriesList = ( { filters, countries}) => {
    if(countries === null) {
        return <div>hola</div>
    }

    const countriesToShow = countries.filter(country => 
        country.name.common.toLowerCase().includes(filters.toLowerCase())
    )

    return (
        <div>
            {countriesToShow.map(country => (
                <Country key={countries.name.common} country={country} />                
            ))}
        </div>
    )
}