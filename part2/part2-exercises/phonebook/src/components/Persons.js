import Name from './Name'

const Persons = ({ contactsToShow }) => {
    return (
        <ul>
            {contactsToShow.map(object => <Name key={object.id} person={object} />)}
        </ul>

    )
}

export default Persons