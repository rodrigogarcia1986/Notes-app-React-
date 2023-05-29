function Detail({ results }) {
    let languages;
    try {
        languages = results.map(item => item = Object.values(item.languages))
    } catch (error) {
        console.log(error.message)
    }

    //console.log(languages[1])

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
                    {languages[0].map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <br />
                <img src={item.flags.png} alt="Country's flag" />
            </>
        )
    })
    return results;
}

export default Detail;