// import { getWeather } from '../services/search'

// function Detail({ results, weatherTime, setWeather }) {
//     //console.log("Início dos itens no ciclo de Detail:", results)
//     let languages;
//     try {
//         languages = results[0].languages;
//         languages = Object.values(languages)
//         //console.log("LANGUAGES1:", languages)
//     } catch (error) {
//         languages = results.languages;
//         languages = Object.values(languages);
//         //console.log("Detail:", error.message, "\nItens:", results)
//         //console.log("LANGUAGES2:", languages)
//     }

//     try {
//         if (results[0] === undefined) {
//             //console.log("Não normalizado")
//         } else {
//             results = results[0]
//             //console.log("Normalizado")
//         }

//     } catch (error) {
//         console.log("Normalização com erro:", results)
//     }


//     // let weather = getWeather(results.capital)
//     //     .then(response => {
//     //         console.log("Response", response)
//     //         weather = response.json()
//     //         //weather = Object.values(response)
//     //         return weather
//     //     })



//     //console.log("WEATHER:", weather)
//     //console.log("CONDITION TEXT", weather.current)


//     return (
//         <>
//             <h2>{results.name.common}</h2>
//             <p>Capital: {results.capital.join("")}</p>
//             <p>Area: {results.area}</p>
//             <br />
//             <h4>Languages:</h4>
//             <ul>
//                 {languages.map((item, index) => <li key={index}>{item}</li>)}
//             </ul>
//             <br />
//             <img src={results.flags.png} alt="Country's flag" />
//             <br />
//             <h4>Weather now!</h4>
//             {/* <li>weather: {weather.current.condition.text}</li>
//             <li><img src={weather.current.condition.icon} alt="Weather icon" /></li>
//             <li>Latitude: {weather.location.lat}</li>
//             <li>Longitude: {weather.location.lon} </li>
//             <li>Local time:{weather.location.localtime} </li>
//             <li>localtime_epoch: {weather.location.localtime_epoch}</li>
//             <li> Timezone: {weather.location.tz_id}</li> */}

//         </>
//     )

// }

// export default Detail;

import axios from "axios"
import { useState, useEffect } from "react"

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null)

  const languages = Object.values(country.languages)
  const flagUrl = country.flags.png
  const capital = country.capital[0]

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const lat = country.capitalInfo.latlng[0]
    const lon = country.capitalInfo.latlng[1]
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    axios.get(url).then(({ data }) => {
      setWeather(data)
    })
  }, [])

  if (!weather) {
    return null
  }

  const icon = weather.weather[0].icon
  const weatherIconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <div>
      <h2>{country.name.common}</h2>

      <p>population {country.population}</p>
      <p>capital {capital}</p>

      <h4>languages</h4>

      <ul>
        {languages.map(language => <li key={language}>{language}</li>)}  
      </ul>

      <img src={flagUrl} width='200' />

      <h4>Weather in {capital}</h4>

      <p>temperature {weather.main.temp} Celsius</p>

      <img src={weatherIconUrl} width='80' />

      <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}

const CountryList = ({ countries, showCountry }) => {
  if ( countries.length>10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

  if ( countries.length===1) {
    return <Country country={countries[0]} />
  }

  return (
    <div>
      {countries.map(c =>
        <p key={c.fifa}>
          {c.name.common}
          <button onClick={() => showCountry(c.name.common)}>
            show
          </button>
        </p>
      )}
    </div>
  )
}
 
const App = () => {
  const [search, setSearch] = useState('fi')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(({ data }) => {
      setCountries(data)
    })
  }, [])

  const matchedContries = countries.filter(c => c.name.common.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div>
      <div>
        find country <input value={search} onChange={({ target }) => setSearch(target.value)} />
      </div>
      <CountryList 
        countries={matchedContries}
        showCountry={setSearch}
      />
    </div>
  )
}

export default App