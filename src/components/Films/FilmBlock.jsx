import React from 'react';
import './style.css'
import $ from 'jquery'
const FilmBlock = ({film}) => {
    const showInfo = (e) =>
    {
        let bt = e.target
        let info = e.target.parentElement.querySelector('#info')
        if(bt.innerHTML==='info ᐯ')
        {
            bt.innerHTML = 'info ᐱ'
            
            let dirP = document.createElement('p')
            dirP.innerHTML='Director: '+film.director
            let desP = document.createElement('p')
            desP.innerHTML='Description: '+film.description
            info.append(dirP, desP)
        }
        else{
            bt.innerHTML = 'info ᐯ'
            $(info).empty()
        }
    }
    return (
        <div className='film-block'>
            <img src={film.image} alt="" />
            <p>{film.name}</p>
            <p>{film.year}</p>
            <button onClick={showInfo}>info ᐯ</button>
            <div id='info'></div>
        </div>
    );
}

export default FilmBlock;
