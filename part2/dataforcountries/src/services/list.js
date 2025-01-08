import axios from 'axios'

const baseUrlAll = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const baseUrlCountry = 'https://studies.cs.helsinki.fi/restcountries/api/name'

const getAll = () => {
    const request = axios.get(baseUrlAll)
    return request.then(response => response.data)
}

const getCountry = (countryName) => {
    const request = axios.get(`${baseUrlCountry}/${countryName}`)
    return request.then(response => response.data)
}

export default { getAll, getCountry }