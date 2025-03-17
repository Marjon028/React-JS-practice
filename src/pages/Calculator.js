import React, { useReducer,useState } from 'react';
const reducer = (state, action) => {
    
            if(action.operator === '+'&& action.sign ==='='){
               alert(JSON.stringify(action),action.sign)
               
                return {results: state.results}
            }
            else{
                alert('please correct Data')
                return {results: state.results}
            }
           
           

    

}
const Calculator = () => {
   
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const [sign,setSign] = useState('');
    const dataResult ={results:0 }
    const [state, dispatch] = useReducer(reducer, dataResult);

    const functionAdd = (operator) => {
       dispatch({ ...dataResult, operator: operator,sign:sign, num1:num1 , num2:num2})
    }
    const functionEqual = (sign) => {
       setSign(sign)
     }

     const setNumber1 = (data) => {
       
        if(num1 === 0){
           setNum1(data)
        }
        else {
        setNum1(prevNum => prevNum + data)
        }
        
    }
   
    return (
        <div>
            <h1>{state.results}</h1>
            <input type="text" value={num1} onChange={(e)=>setNum1(e.target.value)} /><br/>
            <input type="text" value={num2} onChange={(e)=>setNum2(e.target.value)} /><br/>
            <input type="text" value={state.results} /> <br/>
          <button onClick={()=> setNumber1("1")}>1</button>
          <button onClick={()=> setNumber1("2")}>2</button>
          <button onClick={()=> setNumber1("3")}>3</button>
          <br/>
          <button onClick={()=> setNumber1("4")}>4</button>
          <button onClick={()=> setNumber1("5")}>5</button>
          <button onClick={()=> setNumber1("6")}>6</button>
          <br/>
          <button onClick={()=>functionAdd('+')}>+</button>
          <button>-</button>
          <button onClick={()=>functionEqual('=')}>=</button>
            
        </div>
    )
}

export default Calculator;