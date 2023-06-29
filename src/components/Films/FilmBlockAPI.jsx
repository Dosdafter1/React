import React, { useContext, useState } from 'react';
import './style.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFilmContext from '../../contexts/FavoriteFilmContext';
const FilmBlockAPI = ({title,poster,year}) => {
    const {favoriteFilms,addFavoriteFilm,deleteFavoriteFilm} = useContext(FavoriteFilmContext);
    return (
        <div className='film-block'>
            <img src={poster} alt="" />
            <p>{title}</p>
            <p>{year}</p>
            {favoriteFilms.includes(title+"||"+year)?
                <FavoriteIcon className='icon-color' onClick={()=>{deleteFavoriteFilm(title,year)}}/>:            
                <FavoriteBorderIcon className='icon-color' onClick={()=>{addFavoriteFilm(title,year)}}/>}

        </div>
    );
}

export default FilmBlockAPI;
