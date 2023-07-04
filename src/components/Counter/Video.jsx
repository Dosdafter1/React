import React, { useEffect, useRef, useState } from 'react';
import movie from './mov_bbb.mp4';
import { Button } from 'antd';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
const Video = () => {
    const ref = useRef(null);
    const [isPlaying, setPlaying] = useState(false);
    useEffect(()=>{
        ref.current.currentTime = localStorage.getItem('vtime')
        //document.body.click()
        //ref.current.play()
    })
    const playVideo = () => {
        
        setPlaying(!isPlaying)
        if(isPlaying === false)
            ref.current.play()
        else
            ref.current.pause()
    }
    return (
        <div>
            <video loop ref={ref} onTimeUpdate={()=>
                {
                    localStorage.setItem('vtime',ref.current.currentTime)
                }}>
                <source src={movie}/>
            </video>
            <br />
            {isPlaying?
            <Button danger onClick={playVideo}><PauseIcon /></Button>:
            <Button onClick={playVideo}><PlayArrowIcon /></Button>}
            <Button type="dashed" onClick={()=>{
                ref.current.currentTime=0
            }}><StopIcon /></Button>
            
        </div>
    );
}

export default Video;
