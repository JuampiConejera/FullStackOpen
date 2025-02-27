import { CountryWeather } from "./CountryWeather"

export const Country = ( { country, weather }) => {
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p><strong>Capital </strong>{country.capital}</p>
                <ul>
                    {Object.entries(country.languages).map(language => <li key={language[0]}>{language[1]}</li>)}
                </ul>
                <img src={country.flags.png} alt={country.flags.alt} />
                <CountryWeather weather={weather} country={country} />
            </div>
    )
}