import React, { useContext } from 'react';
import FavoriteFilmContext from '../../contexts/FavoriteFilmContext';

const FavoriteFilmList = () => {
    const {favoriteFilms} = useContext(FavoriteFilmContext);
    return (
     
        <div className='favorite-box'>
             <h2>FavoriteFilms</h2>
             {favoriteFilms.map(film=><p>{film.replace('||',' - ')}</p>)}
        </div>
    );
}

export default FavoriteFilmList;
