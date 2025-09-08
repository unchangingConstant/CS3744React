import "./Display.css"

function Display ({ options, selected, onSelect, result }) {
    return (
    <div className="display" id="display">
        <input value={result} readOnly/>
        <select value={selected} onChange={onSelect}>
            <option value={options[0]}>{options[0]}</option>
            <option value={options[1]}>{options[1]}</option>
        </select>
    </div>
    )
}

export default Display;