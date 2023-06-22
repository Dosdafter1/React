import React, { useState } from 'react';
import FilmFilter from './FilmFilter';
import FilmBlock from './FilmBlock';
import './style.css'
import films from './films';
import AddFilm from './AddFilm';
const Films = () => {
    const [filmsList, setFilms] = useState(films);
    const addFilm = (name, poster, director, year, desc) => {
        
                let newfilm = {
                    id: filmsList.length+1,
                    name: name,
                    year: year,
                    image: poster,
                    director: director,
                    description: desc
                }
                console.log(newfilm)
                setFilms([...filmsList,newfilm])
    }
    return (
        <div>
            <h2>Films</h2>
            <h3>Film filter</h3>
            <FilmFilter />
            <h3>Add film</h3>
            <AddFilm addFilm={addFilm} />
            <div className='film-field'>
                {filmsList.map((film) =>(
                <FilmBlock film={film} key={film.id}/>
                ))}
            </div>
        </div>
    );
}

export default Films;
