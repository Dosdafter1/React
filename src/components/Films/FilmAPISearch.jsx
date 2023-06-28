import React, { useState } from 'react';

const FilmAPISearch = ({search,setSearch}) => {
    const [title, setTitle] = useState(search.get('t')??'');
    const [type, setType] = useState(search.get('type')??'');
    const [year, setYear] = useState(search.get('year')??'');
    const getYearArr = () => {
        let resArr = []
        let year = new Date();
        year = year.getFullYear();
        for(let i=1929;i<=year;i++)
        {
            resArr.push(i);
        }
        return resArr;
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(title.trim())
        {
            setSearch({
                t:title,
                type: type,
                y: year
            });
        }
    }
    return (
      
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="">Title:
                    <input type="text" value={title} 
                        onChange={(e)=>{setTitle(e.target.value)}}/>
                </label>
                <label htmlFor="">Type:
                    <select name="" id="" value={type}
                        onChange={(e)=>{setType(e.target.value)}}>
                        <option value="none">-</option>
                        <option value="movie">Movie</option>
                        <option value="movie">Series</option>
                    </select>
                </label>
                <label htmlFor="">Year:
                    <select name="" id="" value={year}
                        onChange={(e)=>{setYear(e.target.value)}}>
                        <option value="none">-</option>
                        {getYearArr().map(year=><option value={year}>{year}</option>)}
                    </select>
                </label>
                <input type="submit" value='Search'/>
            </form>
        </div>
    );
}

export default FilmAPISearch;
