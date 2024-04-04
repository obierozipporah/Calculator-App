import React from 'react';
import { useContext } from 'react';
import { AppContext } from './App';

const Screen = () => {
    const { changes, firstNumber, secondNumber, operation, results } = useContext(AppContext);
    return (
        <section className="screen" style={{ 
            backgroundColor: changes.screenBgColor, 
            color: changes.textColor 
        }}>
            {firstNumber} {operation && operation} {secondNumber}
            {results}
        </section>

    )
}

export default Screen