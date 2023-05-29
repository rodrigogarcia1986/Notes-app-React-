import { getWeather } from '../services/search'

function Detail({ results, weatherTime, setWeather }) {
    //console.log("Início dos itens no ciclo de Detail:", results)
    let languages;
    try {
        languages = results[0].languages;
        languages = Object.values(languages)
        //console.log("LANGUAGES1:", languages)
    } catch (error) {
        languages = results.languages;
        languages = Object.values(languages);
        //console.log("Detail:", error.message, "\nItens:", results)
        //console.log("LANGUAGES2:", languages)
    }

    try {
        if (results[0] === undefined) {
            //console.log("Não normalizado")
        } else {
            results = results[0]
            //console.log("Normalizado")
        }

    } catch (error) {
        console.log("Normalização com erro:", results)
    }


    // let weather = getWeather(results.capital)
    //     .then(response => {
    //         console.log("Response", response)
    //         weather = response.json()
    //         //weather = Object.values(response)
    //         return weather
    //     })



    //console.log("WEATHER:", weather)
    //console.log("CONDITION TEXT", weather.current)


    return (
        <>
            <h2>{results.name.common}</h2>
            <p>Capital: {results.capital.join("")}</p>
            <p>Area: {results.area}</p>
            <br />
            <h4>Languages:</h4>
            <ul>
                {languages.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <br />
            <img src={results.flags.png} alt="Country's flag" />
            <br />
            <h4>Weather now!</h4>
            {/* <li>weather: {weather.current.condition.text}</li>
            <li><img src={weather.current.condition.icon} alt="Weather icon" /></li>
            <li>Latitude: {weather.location.lat}</li>
            <li>Longitude: {weather.location.lon} </li>
            <li>Local time:{weather.location.localtime} </li>
            <li>localtime_epoch: {weather.location.localtime_epoch}</li>
            <li> Timezone: {weather.location.tz_id}</li> */}

        </>
    )

}

export default Detail;