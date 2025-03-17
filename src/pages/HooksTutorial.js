import React, { use, useEffect, useRef, useState } from 'react';
import ThemeButton from '../components/ThemeButton';
import  ThemeProvider  from '../components/ThemeProvider';
import ThemeForm from '../components/ThemeForm';

const UseRef = () => { //kapag use ref about reference style properties
    const [isClicked,setClicked] = useState(false)

    const inputRef = useRef(null);

    const handleClicked =()=>{
        if(!isClicked){
        inputRef.current.style.color = 'red'
        }
        else {
            inputRef.current.style.color= 'black'
        }
        setClicked(!isClicked)
    }

    return (
        <>
            <h1 ref={inputRef}>Hooks Tutorial</h1>
            <button onClick={handleClicked}>Change Color</button>
        </>

    )

}

const UseEffect = ()=>{
const[txt1, settext1] = useState('')
const inputRef = useRef(null);
const [json, setJson] = useState([])

/*useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => setJson(data))
},[])  */ 

useEffect(()=>{
    if(txt1.includes("sti")){
        inputRef.current.style.color = "green"
    }
    else {
        inputRef.current.style.color = "black"
    }

},[txt1])

const editText =(e)=>{
    
    settext1(e)
}



    return (
        <>
        <h1 ref={inputRef}>{txt1}</h1>
        <input type='text' placeholder='' value={txt1} onChange={(e,)=> editText(e.target.value)} />
        
       {json.filter(item => item.name.common.toLowerCase().includes("s")).map((item,index) => (<h1>{item.name.common}</h1>))}
       
       <ThemeProvider>

       <ThemeButton></ThemeButton>
       </ThemeProvider>

      
     
        </>
    )
}

export default UseEffect;
