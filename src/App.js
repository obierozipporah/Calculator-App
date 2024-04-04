import { useState, createContext } from 'react';
import './App.css';
import Keypad from './Keypad';
import Screen from './Screen';
import Top from './Top';
import Footer from './Footer';

export const AppContext = createContext();

function App() {
    const [themeNumber, setThemeNumber] = useState("1");

    const [firstNumber, setFirstNumber] = useState(null);
    const [operation, setOperation] = useState(null); // Operator e.g., +, -, /, *
    const [secondNumber, setSecondNumber] = useState(null);

    const [results, setResults] = useState(null); // Total calculated

    const [changes, setChanges] = useState({
        mainBgColor: null,
        textColor: null,
        keyPad_ToggleBgColor: null,
        screenBgColor: null,
        keyBgColor: null,
        keyColor: null,
        keyShadow: null,
        del_Reset_BgColor: null,
        del_Reset_Equal_TextColor: null,
        del_ResetShadow: null,
        equal_Toggle_BgColor: null,
        equalShadow: null,
        equalTextColor: null 
    });

    const handleResults = () => {
        setResults(eval(firstNumber + operation + secondNumber)); // Values are in strings
        // Concantenating the firstNumber, operation, and secondNumber. eval() does it work to evaluate it

        // null means set to nothing
        setFirstNumber(null); 
        setSecondNumber(null);
        setOperation(null);
    }
    

    return (
        <div 
            className="App"
            style={{ backgroundColor: changes.mainBgColor }}>
            <AppContext.Provider value={{ 
                themeNumber, 
                setThemeNumber, 
                changes,
                setChanges,
                firstNumber,
                setFirstNumber,
                secondNumber,
                setSecondNumber,
                operation,
                setOperation,
                results,
                setResults,
                handleResults
            }}>
                <div className="content">
                    <Top />

                    <Screen />

                    <Keypad />

                    <Footer />
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default App;
