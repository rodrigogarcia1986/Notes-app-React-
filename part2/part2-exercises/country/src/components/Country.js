function Country({ formText, updateFormValue, results }) {

    if (results.length > 10) {
        results = <li>Too many matches, please specify another filter!</li>

    } else if (results.length <= 10 && results.length > 1) {
        results = results.map(item => <li>{item.name.common}</li>)

    } else if (results.length === 0) {
        results = <li>No matches, please specify another filter!</li>

    } else {
        let languages;
        try {
            languages = results.map(item => item = Object.values(item.languages))
        } catch (error) {
            console.log(error.message)
        }

        console.log(languages[1])

        console.log("Languages:", languages)
        results = results.map(item => {
            return (
                <>
                    <h2>{item.name.common}</h2>
                    <p>Capital: {item.capital.join("")}</p>
                    <p>Area: {item.area}</p>
                    <br />
                    <h4>Languages:</h4>
                    <ul>
                        {languages[0].map(item => <li>{item}</li>)}
                    </ul>
                    <br />
                    <img src={item.flags.png} alt="Country's flag" />
                </>
            )
        })
    }



    return (
        <form>
            <label>Find countries </label><input type="text" value={formText} onChange={updateFormValue} />
            <br />
            <h2>Results</h2>
            <ul>{results}</ul>
            {/* <button type="submit" onClick={handleClick}>Search!</button> */}
        </form>
    )

}


export default Country