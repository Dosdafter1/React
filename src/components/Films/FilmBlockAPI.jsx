import React, { useState } from 'react';
import './style.css'
import $ from 'jquery'
const FilmBlockAPI = ({title,poster,year}) => {
    return (
        <div className='film-block'>
            <img src={poster} alt="" />
            <p>{title}</p>
            <p>{year}</p>
        </div>
    );
}

export default FilmBlockAPI;
