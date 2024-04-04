import React, { useContext } from 'react'
import { AppContext } from './App'

const Footer = () => {
    const {themeNumber} = useContext(AppContext);
    return (
        <div className="attribution"  style={{color: themeNumber==='2' && "black"}}> 
            Coded by 
            <a href="https://github.com/obierozipporah" target='_blank' rel="noreferrer"> {/*Link to my Github page*/}
                Zipporah Obiero
            </a>.
        </div>
    )
}

export default Footer