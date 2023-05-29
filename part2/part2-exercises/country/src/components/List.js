import Detail from './Detail'

function List({ results }) {

    function showDetail({ item, index }) {

        console.log("Button clicked", "\nitem:", item, "\nindex:", index);
        return <Detail key={index} results={item} />
    }

    return results.map((item, index) =>
        <li key={index}>{item.name.common} <button onClick={() => showDetail({ item, index })}>Show detail</button></li>
    )
}

export default List