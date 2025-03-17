
import React, { use, useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';





const ObjectLogic = () => {
    const [object, setObject] = useState([{ id: uuidv4(), name: 'John', age: 30,value:0 }]);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
       // Object.keys(object).map((key,index)=>console.log(object[key].value));
        
        const totalValue = object.reduce((previousValue, whatObject) => previousValue + Number(whatObject.value), 0);
        const totalValueEven = object.filter(previousValue => previousValue.value % 2 === 0).reduce((acc, curr) => acc + Number(curr.value), 0);
        setTotalValue(totalValue);
    }, [object]);
        
    
const addObject = () => {
    const newItem ={id: uuidv4(), name: 'Jane', age: 25, value:0};
    setObject([...object, newItem]);

  }
const editObject = (id, name) => {
    setObject(object.map((item, index) => item.id === id ? { ...item, name: name } : item));

  }

const editValue = (id, value) => {
    setObject(object.map((item, index) => item.id === id ? { ...item, value: value } : item));
    
}
const deleteObject = (id) => { 
   
    //Object.keys(object).map((key,index)=>console.log(key));
    //console.log('Deleting object with key:', id);
    setObject(object.filter((item) => item.id !== id));
    //Object.keys(object).filter((key,index)=>console.log(key));
    //setObject(object.filter((item, index) => item !== id));
    }

    return (
        <div><h1>{totalValue}</h1>
            
            {
                
                object.map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p>{item.name} is {item.age} years old</p>
                        <button onClick={() => deleteObject(item.id)}>delete {item.id}</button>
                        <button onClick={() => editObject(item.id, "none")}>Change Name</button>
                        <input 
                            type="text" 
                            value={item.value} 
                            onChange={(e) => editValue(item.id, e.target.value)} 
                        />
                    </div>
                ))
            }
            <button onClick={addObject}>Add Object</button>
        </div>
    );
    };

    export default ObjectLogic;