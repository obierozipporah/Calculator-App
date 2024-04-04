import React from 'react';
import { useContext } from 'react';
import { AppContext } from './App';

const Keypad = () => {
    
    const { 
        changes, 
        setFirstNumber, 
        setSecondNumber, 
        operation, 
        handleResults, 
        setOperation, 
        results, 
        setResults 
    } = useContext(AppContext);

    const clearScreen = () => {
        setFirstNumber(null) 
        setOperation(null)
        setSecondNumber(null)
        setResults(null)
    }

    const handleValue = (value) => {
        if (operation === null) {
            setFirstNumber((prevFirstNumber) => (prevFirstNumber !== null ? prevFirstNumber + value : value.toString()));
        } else {
            setSecondNumber((prevSecondNumber) => (prevSecondNumber !== null ? prevSecondNumber + value : value.toString()));
        }
        setResults(null);
    };

    const handleOperation = (operation) => {
        setOperation(operation)
        results && setFirstNumber(results) 
        setResults(null)
    }

    return (
        <section className="keypad" style={{ backgroundColor: changes.keyPad_ToggleBgColor }}>

            <div className="keys">
                {/* Number SEVEN */}
                <div 
                    onClick={() => { handleValue(7) }}
                    className="key" 
                    style={{ 
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>7</div> 
                {/* NUMBER SEVEN */}


                {/* Number EIGHT */}
                <div 
                    onClick={() => { handleValue(8) }}
                    className="key" 
                    style={{ 
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>8</div>
                {/* NUMBER EIGHT */}


                {/* Number NINE */}
                <div 
                    onClick={() => { handleValue(9) }}
                    className="key" 
                    style={{ 
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>9</div>
                {/* NUMBER NINE */}


                {/* DELETE */}
                <div 
                    onClick={clearScreen}
                    className="key white ddb delete" 
                    style={{
                        backgroundColor: changes.del_Reset_BgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.del_ResetShadow}`, 
                        color: changes.del_Reset_Equal_TextColor 
                }}>DEL</div>
                {/* DELETE */}
            </div>




            <div className="keys">
                {/* NUMBER FOUR */}
                <div 
                    onClick={() => { handleValue(4) }}
                    className="key" 
                    style={{ 
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>4</div>
                {/* NUMBER FOUR */}


                {/* NUMBER FIVE */}
                <div 
                    onClick={() => { handleValue(5) }}
                    className="key" 
                    style={{ 
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>5</div>
                {/* NUMBER FIVE */}


                {/* NUMBER SIX */}
                <div 
                    onClick={() => { handleValue(6) }}
                    className="key" 
                    style={{ 
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>6</div>
                {/* NUMBER SIX */}


                {/* PLUS SIGN */}
                <div 
                    onClick={() => {
                        handleOperation("+")
                    }}
                    className="key add" 
                    style={{
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>+</div>
                {/* PLUS SIGN */}
            </div>




            <div className="keys">
                {/* NUMBER ONE */}
                <div 
                    onClick={() => { handleValue(1) }}
                    className="key" 
                    style={{ 
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>1</div>
                {/* NUMBER ONE */}


                {/* NUMBER TWO */}
                <div 
                    onClick={() => { handleValue(2) }}
                    className="key" 
                    style={{ 
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>2</div>
                {/* NUMBER TWO */}


                {/* NUMBER THREE */}
                <div 
                    onClick={() => { handleValue(3) }}
                    className="key" 
                    style={{ 
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>3</div>
                {/* NUMBER THREE */}


                {/* SUBTRACT SIGN */}
                <div 
                    onClick={() => {
                        handleOperation("-")
                    }}
                    className="key subtract" style={{
                    backgroundColor: changes.keyBgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                    color: changes.keyColor 
                }}>-</div>
                {/* SUBTRACT SIGN */}
            </div>




            <div className="keys">
                {/* POINT SIGN */}
                <div 
                    onClick={() => { 
                        !operation && handleValue(".")
                        operation && handleValue(".")
                    }}
                    className="key" 
                    style={{ 
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>.</div>
                {/* POINT SIGN */}


                {/* NUMBER ZERO */}
                <div 
                    onClick={() => { handleValue(0) }}
                    className="key" 
                    style={{ 
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>0</div>
                {/* NUMBER ZERO */}


                {/* DIVISION SIGN */}
                <div 
                    onClick={() => {
                        handleOperation("/")
                    }}
                    className="key divide" 
                    style={{ 
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>/</div>
                {/* DIVISION SIGN */}


                {/* MULTIPLICATION SIGN */}
                <div 
                    onClick={() => {
                        handleOperation("*")
                    }}
                    className="key multiply" 
                    style={{
                        backgroundColor: changes.keyBgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.keyShadow}`, 
                        color: changes.keyColor 
                }}>x</div>
                {/* MULTIPLICATION SIGN */}
            </div>





            <div className="keys bottom">
                {/* RESET */}
                <div 
                    onClick={clearScreen}
                    className="key ddb white" 
                    style={{
                    backgroundColor: changes.del_Reset_BgColor, 
                    boxShadow: `inset 0px -2px 1px ${changes.del_ResetShadow}`, 
                    color: changes.del_Reset_Equal_TextColor 
                }}>RESET</div>
                {/* RESET */}


                {/* EQUAL SIGN */}
                <div 
                    onClick={
                        handleResults
                    }
                    className="key white red" 
                    style={{
                        backgroundColor: changes.equal_Toggle_BgColor, 
                        boxShadow: `inset 0px -2px 1px ${changes.equalShadow}`, 
                        color: changes.equalTextColor
                }}>=</div>
                {/* EQUAL SIGN */}
                
            </div>
        </section>
    )
}

export default Keypad;