import Detail from './Detail'
import List from './List'

function Country({ results }) {

    if (results.length > 10) {
        results = <li>Too many matches, please specify another filter!</li>

    } else if (results.length <= 10 && results.length > 1) {
        results = <List results={results} />

    } else if (results.length === 0) {
        results = <li>No matches, please specify another filter!</li>

    } else {
        results = <Detail results={results} />
    }



    return (
        <>
            <ul>{results}</ul>
        </>

    )

}


export default Country