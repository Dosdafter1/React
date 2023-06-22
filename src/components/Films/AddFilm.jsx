import React, { useState } from 'react';

const AddFilm = ({addFilm}) => {
    const [name, setName] = useState('');
    const [poster, setPoster] = useState('');
    const [director, setDirector] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if(name.trim().length>0 & poster.trim().length>0 & director.trim().length>0
            & year.trim().length>0 & description.trim().length>0)
        {
            addFilm(name,poster,director,year,description)
            console.log('add')
            setName('')
            setPoster('')
            setDirector('')
            setYear('')
            setDescription('')
        }
    }

    const nameChange = (e) =>{
        setName(e.target.value)
    }
    const posterChange = (e) =>{
        setPoster(e.target.value)
    }
    const directorChange = (e) =>{
        setDirector(e.target.value)
    }
    const yearChange = (e) =>{
        setYear(e.target.value)
    }
    const descriptionChange = (e) =>{
        setDescription(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="">Name:
                <br />
                <input type="text" value={name} onChange={nameChange} /></label>
                
                <br />
                
                <label htmlFor="">Poster:
                <br />
                <input type="text" value={poster} onChange={posterChange}/></label>
                
                <br />
                
                <label htmlFor="">Director:
                <br />
                <input type="text" value={director} onChange={directorChange}/></label>
                
                <br />

                <label htmlFor="">Year:
                <br />
                <input type="text" value={year} onChange={yearChange}/></label>

                <br />

                <label htmlFor="">Description:
                <br />
                <input type="text" value={description} onChange={descriptionChange}/></label>

                <br />
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddFilm;


