import './countryWeather.css'

export const CountryWeather = ( { weather, country }) => {
    if (!weather.main || !weather.weather) {
        return <div>Loading weather data...</div>
    }
    return (
        <div className='weather'>
            <h2>Weather in {country.capital}</h2>
            <p>temperature {(weather.main.temp - 273.15).toFixed(1)} Celsius </p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
            <p>wind {weather.wind.speed} m/s</p>
        </div>
    )
}