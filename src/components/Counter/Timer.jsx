import React, { useRef, useState } from 'react';

const Timer = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    let seconds = (now-startTime)/1000
    const timerElem = useRef(null)
    const interval = useRef(null)
    
    const handleStart = ()=> {
        setStartTime(Date.now())
        setNow(Date.now())
        timerElem.current.style.color='blue';
        interval.current = setInterval(()=>{
            setNow(Date.now())
        },100)
    }
    const handleStop = ()=> {
        clearInterval(interval.current)
    }
    return (
        <div>
            <div ref={timerElem}>{seconds}</div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default Timer;
