import './App.css';
import Country from './components/Country';
import { useState } from 'react';
import { getCountryByName } from './services/search'

function App() {
  const [formText, setFormText] = useState()
  const [countries, setCountries] = useState([])
  const [weatherTime, setWeather] = useState([])


  // function handleFormSubmitSearchButton(event) {
  //   event.preventDefault();
  //   console.log(formText);
  //   getCountryByName(formText);
  // }

  function updateFormValue(event) {
    event.preventDefault();
    console.log(event.target.value);
    let realText = event.target.value;
    setFormText(event.target.value)

    getCountryByName(realText)
      .then(response => {
        console.log(response)
        setCountries(response)
      })
  }



  function showDetail({ item, index }) {
    // let languages;
    // try {
    //   languages = item.languages
    //   languages = Object.values(languages)
    //   console.log("LANGUAGES:", languages, "\nitem:", item)


    //   //console.log("RESULTS:", results)
    // } catch (error) {
    //   console.log("Erro1:", error.message, "\n languages:", languages)
    // }

    console.log("Button clicked", "\nitem:", item, "\nindex:", index);
    const newDetail = item;
    //console.log("New Detail", newDetail, "newDetail name:", newDetail.name.common)

    setCountries(newDetail)
    // setCountries([
    //   <>
    //     <h2>{newDetail.name.common}</h2>
    //     <p>Capital: {newDetail.capital.join("")}</p>
    //     <p>Area: {newDetail.area}</p>
    //     <br />
    //     <h4>Languages:</h4>
    //     <ul>
    //       {languages.map((item, index) => <li key={index}>{item}</li>)}
    //     </ul>
    //     <br />
    //     <img src={newDetail.flags.png} alt="Country's flag" />
    //   </>
    // ]
    // )
    console.log("Chegou até o fim no App")
  }


  return (
    <div>
      <form>
        <label>Find countries </label><input type="text" value={formText} onChange={updateFormValue} />
        <br />
      </form>
      <h2>Results</h2>

      <Country results={countries} showDetail={showDetail} weatherTime={weatherTime} setWeather={setWeather} />

    </div>
  );
}

export default App;
