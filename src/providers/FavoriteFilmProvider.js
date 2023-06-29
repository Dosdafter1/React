import React, { useEffect, useState } from 'react';
import FavoriteFilmContext from '../contexts/FavoriteFilmContext';

const FavoriteFilmProvider = ({children}) => {
    const [favoriteFilms, setFavoriteFilms] = useState([]);
    const addFavoriteFilm = (title, year) => {
        setFavoriteFilms([...favoriteFilms,title+'||'+year])
        let key = 'favoriteFilms#'+localStorage.length
        localStorage.setItem(key,title+'||'+year)
        
    }
    const deleteFavoriteFilm = (title, year) => {
       setFavoriteFilms(favoriteFilms.filter(film=>film!==title+'||'+year))
        for(var i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i)
            if(key.includes('Film'))
            {
                if(localStorage.getItem(key)===title+'||'+year)
                {
                    localStorage.removeItem(key)
                    break;
                }
            }
        }
    }
    const getFavoriteFilms=()=>{
        let res = []
        if(localStorage.length)
            for(var i = 0; i < localStorage.length; i++){
                let key = localStorage.key(i)
                if(key.includes('Film'))
                {
                    res.push(localStorage.getItem(key))
                }
            }
        setFavoriteFilms(res)
    }
    useEffect(() => {
        getFavoriteFilms()
    }, []);
    useEffect(()=>{},
    [favoriteFilms])
    return (
        <FavoriteFilmContext.Provider value={{favoriteFilms,addFavoriteFilm,deleteFavoriteFilm}}>
            {children}
        </FavoriteFilmContext.Provider>
    );
}

export default FavoriteFilmProvider;
