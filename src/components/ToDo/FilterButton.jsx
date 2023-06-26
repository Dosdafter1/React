import React from 'react';
const FilterButton = ({name,filter, setFilter}) => {
    return (
        <button className={filter===name? 'active':''}
        onClick={()=>{setFilter(name)}}>
            Show {name} tasks
        </button>
        
    );
}

export default FilterButton;
