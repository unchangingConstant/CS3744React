import "./Selector.css"

function Selector ({ options, selected, onSelect, onInputChange}) {
    return (
    <div className="selector" id="selector">
        <input onChange={onInputChange}/>
        <select value={selected} onChange={onSelect}>
            <option value={options[0]}>{options[0]}</option>
            <option value={options[1]}>{options[1]}</option>
        </select>
    </div>
    )
}

export default Selector;