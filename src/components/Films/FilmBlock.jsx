import React, { useState } from 'react';
import './style.css'
import $ from 'jquery'
const FilmBlock = ({film}) => {
    const [director, setDir] = useState('');
    const [desc, setDesc] = useState('');
    const [btnText, setBtnText] = useState('info ᐯ');
    const showInfo = (e) =>
    {
        if(btnText==='info ᐯ')
        {
            setBtnText('info ᐱ')
            setDir('Director: '+film.director)
            setDesc('Description: '+film.description)
        }
        else{
            setBtnText('info ᐯ')
            setDir('')
            setDesc('')
        }
    }
    return (
        <div className='film-block'>
            <img src={film.image} alt="" />
            <p>{film.name}</p>
            <p>{film.year}</p>
            <button onClick={showInfo}>{btnText}</button>
            
        </div>
    );
}

export default FilmBlock;
