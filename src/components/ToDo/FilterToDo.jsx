import React from 'react';

const FilterToDo = () => {
    const hello =  () => {
        console.log('test')
    }
    return (
        <div>
            <button onClick={()=>{alert('Hi')}}>Show All</button>
            <button onClick={hello}>Show active</button>
            <button>Show completed</button>
        </div>
    );
}

export default FilterToDo;
