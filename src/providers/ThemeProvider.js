import React, { useEffect, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme')??'dark');
    const changeTheme=()=>{
        if(theme==='dark')
            setTheme('light')
        else
            setTheme('dark')
        
    }
    useEffect(()=>{
        localStorage.setItem('theme',theme)
    },[theme])
    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
