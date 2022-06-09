import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({value = 0}) => {

    const [counter,setCounter] = useState(value)

    const suma = () =>setCounter(counter + 1) 
    const resta = () => setCounter(counter - 1)
    const reset = () =>{
        setCounter(value)
    }

return (
    <div className='primer-componente'>
        <h1 >CounterApp</h1>
        <h2> { counter } </h2>
        <div className='buttons-div'>
            <button onClick={suma}>Suma</button>
            <button onClick={reset}>Reset</button>
            <button onClick={resta}>Resta</button>
        </div>
        
    </div>
    )
}

CounterApp.propTypes = { 
    counter: PropTypes.number.isRequired
}
