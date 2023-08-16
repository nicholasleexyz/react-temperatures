import { useState } from 'react'
import './App.css'

/**
 * Converts a temperature in celsius to fahrenheit.
 * Also rounds result to nearest two decimal places.
 * @param {number} temperatureInCelsius
 * @returns {number}
 */
function celsiusToFahrenheit(temperatureInCelsius) {
  return Math.round((((temperatureInCelsius * 1.8) + 32) + Number.EPSILON) * 100) / 100;
}

/**
 * Converts a temperature in fahrenheit to celsius.
 * Also rounds result to nearest two decimal places.
 * @param {number} temperatureInFahrenheit
 * @returns {number}
 */
function fahrenheitToCelsius(temperatureInFahrenheit) {
  return Math.round((((temperatureInFahrenheit - 32) / 1.8) + Number.EPSILON) * 100) / 100;
}

function App() {
  const [fInput, setFInput] = useState(0);
  const [cInput, setCInput] = useState(0);

  return (
    <>
      <div className='content'>
        <div className='item-group'>
          <div className='item'>
            <label htmlFor="cTempInput">
              Celsius: 
              <input
                id="cTempInput"
                type="text"
                name="celsius"
                value={cInput}
                onInput={e => setCInput(e.target.value)}/>
            </label>
            <span>Fahrenheit: {celsiusToFahrenheit(Number(cInput))}</span>
          </div>

          <div className='item'>
            <label htmlFor="fTempInput">
              Fahrenheit: 
              <input
                id="fTempInput"
                type="text"
                name="fahrenheit"
                value={fInput}
                onInput={e => setFInput(e.target.value)}/>
            </label>
            <span>Celsius: {fahrenheitToCelsius(Number(fInput))}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
