
import { useReducer, useState } from "react";


const reducer = ( state, action) =>{
    switch(action.type){
        case "checker": 
            return { count : state.count +2}
    }
}

const HooksReducer =()=>{

    const data = {count:0}
    const [state, dispatch] = useReducer(reducer,data)

    const handleEvent = (type)=>{
        dispatch({type : type})
    };
    return(
        <>
        <h1>Hooks Reducer</h1>

        <h1>{state.count}</h1>
        <button onClick={()=>handleEvent("checker")}> click me</button>
        </>
    )


}

export default HooksReducer;