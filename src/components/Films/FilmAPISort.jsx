import React from 'react';
import FIlmButtonAPI from './FIlmButtonAPI';
import { v4 as uuidv4 } from 'uuid';

const FilmAPISort = ({sort, sorts, setSort}) => {
    const sorts_keys = Object.keys(sorts)
    return (
        <div>
            {sorts_keys.map(sortType=><FIlmButtonAPI 
                setSort={setSort}  
                type={sortType} 
                sort = {sort}
                key={uuidv4()}/>)}
        </div>
    );
}

export default FilmAPISort;
