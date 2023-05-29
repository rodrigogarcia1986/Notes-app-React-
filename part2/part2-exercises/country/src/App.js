import './App.css';
import Country from './components/Country';
import { useState, useEffect } from 'react';
import { getCountryByName } from './services/search'

function App() {
  const [formText, setFormText] = useState()
  const [countries, setCountries] = useState([])


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


  return (
    <div>
      <Country formText={formText} updateFormValue={updateFormValue} results={countries} />

    </div>
  );
}

export default App;
