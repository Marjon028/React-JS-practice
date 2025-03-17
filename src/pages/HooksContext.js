import { useContext } from "react";

import ThemeProvider  from "../components/ThemeProvider";
import ThemeButton from "../components/ThemeButton";
import ThemeForm from "../components/ThemeForm";
import ThemeFormButton from "../components/ThemeFormButton";

const HooksContext = () => {

    
  
    return(
        <>
        <ThemeProvider >
            <div><h1>Context API</h1></div>
             <ThemeButton></ThemeButton>
            </ThemeProvider>  


            <ThemeForm>
            <div><h1>Second Context</h1></div>
                <ThemeFormButton>  </ThemeFormButton>
            </ThemeForm>

          
       </>
    
       
    
    )

    
}

export default HooksContext;