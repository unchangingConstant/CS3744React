import Header from "./Header"
import Selector from "./Selector"
import Display from "./Display"
import Convert from "./Convert"
import "./App.css"
import { useState } from 'react';

function App() {

  const units = ['Fahrenheit', 'Celcius']

  /* Model start */
  const [inputScale, setInputScale] = useState(units[0])
  const [userInput, setUserInput] = useState('');
  const [displayScale, setDisplayScale] = useState(units[1])
  const [result, setResult] = useState('')
  /* Model end*/

  /* Controller start */
  function handleInputScaleChange(e) {
    setInputScale(e.target.value)
  }

  function handleDisplayScaleChange(e) {
    setDisplayScale(e.target.value)
  }

  function handleUserInputChange(e) {
    setUserInput(e.target.value)
  }

  function updateResult()  {
    let temp = Number(userInput)

    if (temp < -273.15 && inputScale == units[1])  {
      setResult('Impossible temperature')
    }
    else if (temp < -479.67 && inputScale == units[0])  {
      setResult('Impossible temperature')
    }
    else if (!Number.isFinite(temp))  {
      setResult('N/A')
    }
    else if (inputScale == displayScale) {
      setResult(userInput)
    }
    else if (inputScale == units[0]) {
      setResult(((temp - 32) * (5/9)).toFixed(2))
    }
    else {
      setResult(((temp * (9/5)) + 32).toFixed(2))
    }
  }
  /* Controller end */

  /* The view */
  return (
    <div id="homepage">
      <Header/>
      <div className="grid">
          <Selector 
            options={units} 
            selected={inputScale} 
            onSelect={handleInputScaleChange} 
            onInputChange={handleUserInputChange}/>
          <Display 
            options={units} 
            selected={displayScale} 
            onSelect={handleDisplayScaleChange} 
            result={result}/>
          <Convert 
            onClick={updateResult}/>
      </div>
    </div>
  )
}

export default App
