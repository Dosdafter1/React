import React, { useRef, useState } from 'react';
import MyForm from '../Forms/MyForm';
import Forma from '../Forms/Forma';
import Timer from './Timer';
import Video from './Video';

const Counter = () => {
    const [count, setCount] = useState(0)
    const ref = useRef(0);
    console.log('Component updated')
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

    const handleClick = () => {
        ref.current += 1;
        alert(ref.current)
    }
    return (
        <>
            <div>
                <button onClick={()=>{decrement()}}>-</button>
                <span>{count}</span>
                <button onClick={()=>{increment()}}>+</button>
            </div>
            <hr />
            
            <button onClick={handleClick}>Click me</button>
            <hr />
            <Timer />
            <hr />
            <Video />
            <hr />
            <h2>Formik</h2>
            <MyForm />
            <h2>ANTD</h2>
            <Forma />
        </>
    );
}

export default Counter;
