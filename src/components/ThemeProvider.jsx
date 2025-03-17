
import ThemeContext from "../context/ThemeContext";
import { useState } from "react";   
const ThemeProvider= ({children}) => {

    const [theme, setTheme] = useState('light');
    const [count, setCount] = useState(0);  
    
    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
        setCount((prevCount)=> prevCount + 1);
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme, count, setCount}}>
            <input type="text" value={theme} onChange={(e)=>setTheme(e.target.value)}/>
        {children}
        </ThemeContext.Provider>
    );
    }

    export default ThemeProvider;