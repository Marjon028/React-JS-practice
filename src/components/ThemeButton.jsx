import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const {count, setCount} = useContext(ThemeContext);


    const handleClick =()=>{
        toggleTheme(theme)
    }

  
    

    return (
<>
        <button onClick={toggleTheme}>
            {theme ==='light' ? 'dark' : 'light'} Mode
            {count}
        </button>

 </>
    );
}
export default ThemeButton;