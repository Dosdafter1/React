import React, { useEffect, useState } from 'react';
import FilmAPISearch from './FilmAPISearch';
import FilmAPISort from './FilmAPISort';
import FilmBlockAPI from './FilmBlockAPI';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const Key = "2aa77b8f"

const FilmAPI = () => {
    const [search, setSearch] = useSearchParams();
    const [films, setFilms] = useState([]);
    const [sort, setSort] = useState('');
    const getFilms = async () => {
        if(search.size)
        {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${Key}&s=${search.get('t')}&type=${search.get('type')}&y=${search.get('y')}`)
            if(response.data.Response !== "False")
            {
                setFilms(response.data.Search)
            }
        }
    }
    useEffect(()=>{
        getFilms();
    },[search]);
    const sorts = {
        title: (a,b)=> a.Title > b.Title? 1: a.Title === b.Title? 0:-1,
        year: (a,b)=> a.Year > b.Year? 1: a.Year === b.Year? 0:-1
    }
    return (
        <div>
            <FilmAPISearch
                search={search}
                setSearch={setSearch} />
            <FilmAPISort sort={sort}
                            sorts={sorts}
                            setSort={setSort}/>
            <div className='film-field'> 
                {films.sort(sorts[sort]).map(film => <FilmBlockAPI 
                                                        title={film.Title}
                                                        poster = {film.Poster}
                                                        year = {film.Year} 
                                                        key={uuidv4()}/>)}
            </div>
        </div>
    );
}

export default FilmAPI;
