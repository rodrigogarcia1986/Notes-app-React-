import Detail from './Detail'
import List from './List'

function Country({ results, showDetail, weatherTime, setWeather }) {

    let itens;

    try {
        itens = results.map(item => item)
    } catch (error) {
        //console.log("Erro no Country", error.message)
        itens = results
    }

    //console.log("Length no início do ciclo em country", itens.length, "\nItens no início do cciclo em country:", itens)


    if (itens.length > 10) {
        itens = <li>Too many matches, please specify another filter!</li>

    } else if (itens.length <= 10 && results.length > 1) {
        itens = <List results={itens} showDetail={showDetail} />

    } else if (itens.length === 0) {
        itens = <li>No matches, please specify another filter!</li>

    } else {
        itens = <Detail results={itens} weatherTime={weatherTime} setWeather={setWeather} />
    }



    return (
        <>
            <ul>{itens}</ul>
            {/* {console.log("Chegou no fim do ciclo Country")} */}
        </>

    )

}


export default Country