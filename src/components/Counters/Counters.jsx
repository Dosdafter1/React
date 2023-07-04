import React, { useState } from 'react';
import Count from './Count';
import IsFive from './isFive';

const Counters = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    return (
        <div>
            <div>
                <button onClick={()=>{setCount1(count1+1)}}>+</button>
                <Count val={count1} id={1}/>
            </div>
            <hr />
            <div>
            <button onClick={()=>{setCount2(count2+1)}}>+</button>
                <Count val={count2} id={2}/>
                <IsFive val={count2} />
            </div>
        </div>
    );
}

export default Counters;
