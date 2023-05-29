
function List({ results, showDetail }) {


    return results.map((item, index) =>
        <li key={index}>{item.name.common} <button onClick={() => showDetail({ item, index })}>Show detail</button></li>
    )
}

export default List