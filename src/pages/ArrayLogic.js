import React, { useState } from 'react';


const ArrayLogic = () => {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    return (
    <>
    <div>
        {array.filter(num => num % 2 ==0).map((number , index) =>
        <p key={index}>{number}</p>)}
    </div>
    <button onClick={() => setArray([...array, array[array.length - 1] + 1])}>
        Add Number
    </button>
    
    </>
    );
}

export default ArrayLogic;