
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
const ThemeFormButton = () => {

    const {dataTest, setDataTest} = useContext(ThemeContext);


    const handleClick= ()=>{
        alert(dataTest);
    }
    return (
        <button className="theme-form-button" onClick={handleClick}>Submit</button>
    );
    }

    export default ThemeFormButton;