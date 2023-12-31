import React from 'react';
import FilterButton from './FilterButton';
const FilterToDo = ({filter_map,filter,setFilter}) => {
    const filter_names = Object.keys(filter_map)
    return (
        <div>
            {filter_names.map(name =>
                                <FilterButton 
                                    name={name} 
                                    filter = {filter}
                                    setFilter={setFilter}
                                    key={name}/>)}
            
        </div>
    );
}

export default FilterToDo;
