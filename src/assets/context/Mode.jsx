import React, { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState(localStorage.getItem('mode'));
    useEffect(() => {
        if (localStorage.getItem('mode') === null) {
            localStorage.setItem('mode', 'Dark')
        }
    }, [])

    return (
        <ModeContext.Provider value={[mode, setMode]}>
            {children}
        </ModeContext.Provider>
    )
}