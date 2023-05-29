function Detail({ results }) {
    console.log("Início dos itens no ciclo de Detail:", results)
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

    //console.log(languages[1])

    //console.log("Languages:", languages)
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

        </>
    )

}

export default Detail;