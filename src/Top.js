import React, { useContext } from 'react';
import { AppContext } from './App';

const Top = () => {


    const { themeNumber, setThemeNumber, changes, setChanges } = useContext(AppContext);

    return (
        <section className="top" style={{color: changes.textColor}}>
            <h1>calc</h1>

            <div className='right'>
                <div>
                    <p className='theme-label'>THEME</p>
                </div>

                <div>
                    <div className="theme-number">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>

                    <div className="toggle-button" style={{ backgroundColor: changes.keyPad_ToggleBgColor }}>
                        <div 
                            onClick={() => {
                                setThemeNumber("1") // Set theme number
                                setChanges({
                                    ...changes, 
                                    mainBgColor: "hsl(222, 26%, 31%)",
                                    textColor: "hsl(0, 0%, 100%)",
                                    keyPad_ToggleBgColor: "hsl(223, 31%, 20%)",
                                    screenBgColor: "hsl(224, 36%, 15%)",
                                    keyColor: "hsl(221, 14%, 31%)",
                                    keyBgColor: "hsl(30, 25%, 89%)",
                                    keyShadow: "hsl(28, 16%, 65%)",
                                    del_Reset_BgColor: "hsl(225, 21%, 49%)",
                                    del_Reset_TextColor: "hsl(0, 0%, 100%)",
                                    del_ResetShadow: "hsl(224, 28%, 35%)",
                                    equalTextColor: "hsl(0, 0%, 100%)",
                                    equal_Toggle_BgColor: "hsl(6, 63%, 50%)",
                                    equalShadow: "hsl(6, 70%, 34%)"
                                }) // Set color and background changes based on themeNumber
                            }}>
                        </div>

                        <div 
                            onClick={() => {
                                setThemeNumber("2") // Set theme number
                                setChanges({
                                    ...changes, 
                                    mainBgColor: "hsl(0, 0%, 90%)",
                                    textColor: "hsl(60, 10%, 19%)",
                                    keyPad_ToggleBgColor: "hsl(0, 5%, 81%)",
                                    screenBgColor: "hsl(0, 0%, 93%)",
                                    keyColor: "hsl(60, 10%, 19%)",
                                    keyBgColor: "hsl(45, 7%, 89%)",
                                    keyShadow: "hsl(35, 11%, 61%)",
                                    del_Reset_BgColor: "hsl(185, 42%, 37%)",
                                    del_Reset_TextColor: "hsl(0, 0%, 100%)",
                                    del_ResetShadow: "hsl(185, 58%, 25%)",
                                    equalTextColor: "hsl(0, 0%, 100%)",
                                    equal_Toggle_BgColor: "hsl(25, 98%, 40%)",
                                    equalShadow: "hsl(25, 99%, 27%)"
                                }) // Set color and background changes based on themeNumber
                            }}>
                        </div>

                        <div 
                            onClick={() => {
                                setThemeNumber("3") // Set theme number
                                setChanges({
                                    ...changes, 
                                    mainBgColor: "hsl(268, 75%, 9%)",
                                    textColor: "hsl(52, 100%, 62%)",
                                    keyPad_ToggleBgColor: "hsl(268, 71%, 12%)",
                                    screenBgColor: "hsl(268, 71%, 12%)",
                                    keyColor: "hsl(52, 100%, 62%)",
                                    keyBgColor: "hsl(268, 47%, 21%)",
                                    keyShadow: "hsl(290, 70%, 36%)",
                                    del_Reset_BgColor: "hsl(281, 89%, 26%)",
                                    del_Reset_TextColor: "hsl(0, 0%, 100%)",
                                    del_ResetShadow: "hsl(285, 91%, 52%)",
                                    equalTextColor: "hsl(198, 20%, 13%)",
                                    equal_Toggle_BgColor: "hsl(176, 100%, 44%)",
                                    equalShadow: "hsl(177, 92%, 70%)",
                                }) // Set color and background changes based on themeNumber
                            }}>
                        </div>

                        <div 
                            style={{
                                backgroundColor: changes.equal_Toggle_BgColor, // Set background color with equal_Toggle_BgColor from the changes object
                                boxShadow: `inset 0px -3px 2px ${changes.equalShadow}` // Set background shadow color with equalShadow from the changes object
                            }} 
                            className={`red ${
                            themeNumber && `theme-${themeNumber}` 
                            /* Color already has a className of "red". Adding a new class based on the themeNumber selected.
                            e.g., themeNumber = 1, then new className will "theme-1". Custom CSS have been built for each theme (1, 2, 3) class in the App.css. */
                        }`}></div>
                    </div>                        
                </div>
            </div>
        </section>
    )
}

export default Top