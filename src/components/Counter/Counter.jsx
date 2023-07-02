import React, { useState } from 'react';
import MyForm from '../Forms/MyForm';
import Forma from '../Forms/Forma';

const Counter = () => {
    const [count, setCount] = useState(0)
    const decrement = () => {
        setCount(count => count- 1)
        setCount(count => count- 1)
        setCount(count => count- 1)
    }
    const increment = () => {
        setCount(count => count+ 1)
        setCount(count => count+ 1)
        setCount(count => count+ 1)
    }
    return (
        <>
            <div>
                <button onClick={()=>{decrement()}}>-</button>
                <span>{count}</span>
                <button onClick={()=>{increment()}}>+</button>
            </div>
            <h2>Formik</h2>
            <MyForm />
            <h2>ANTD</h2>
            <Forma />
        </>
    );
}

export default Counter;
