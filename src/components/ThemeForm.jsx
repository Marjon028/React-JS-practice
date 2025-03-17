import ThemeContext from "../context/ThemeContext";

import { useState } from "react";

const ThemeForm = ({children})=>{



    const [dataTest, setDataTest] = useState('Yess');  
    return(
        <ThemeContext.Provider value={{dataTest}}>
            <input type="text" value={dataTest} onChange={(e)=>(setDataTest(e.target.value))}/>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeForm;