import { useState } from 'react'
import Filter from './components/Filter'
import Person from './components/Person'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 0,
      tel: ""
    }
  ])
  const [newName, setNewName] = useState('Insert new name')

  const [tel, setTel] = useState()

  const [find, setFind] = useState("Type data for search")

  const [showAll, setShowAll] = useState(true)


  function updateName(event) {
    console.log(event.target.value)
    setNewName(event.target.value)

  }

  function updateTel(event) {
    console.log(event.target.value)
    setTel(event.target.value)

  }

  function updateFind(event) {
    console.log(event.target.value)
    setFind(event.target.value)

  }

  function handleSubmitNewName(event) {
    event.preventDefault();

    if (persons.find(person => person.name === newName)) {
      return alert(`${newName} has been added already`);
    } else if (persons.find(person => person.tel === tel)) {

      return alert(`${tel} has been added already`)

    } else {

      const nameObject = {
        name: newName,
        id: persons.length + 1,
        tel: tel
      }
      setPersons(persons.concat(nameObject));
      setNewName("Insert next name");
      setTel();

    }
  }

  function handleSearch(event) {
    event.preventDefault();

    if (!showAll) {
      setShowAll(true);
      console.log("showAll", showAll)
    } else {
      setShowAll(false);
      console.log("showAll", showAll)
    }

  }

  const contactsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase() === find.toLowerCase());


  return (
    <div>
      <h1>Phonebook</h1>

      <Filter find={find} updateFind={updateFind} handleSearch={handleSearch} />

      <h2>Add new contact</h2>

      <Person newName={newName} updateName={updateName} updateTel={updateTel} tel={tel} handleSubmitNewName={handleSubmitNewName} />

      <h2>Numbers</h2>
      <Persons contactsToShow={contactsToShow} />
    </div>
  )
}

export default App;
