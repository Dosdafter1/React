import React from 'react';

const FIlmButtonAPI = ({type, setSort, sort}) => {
    return (
        <button className={sort===type? 'active':''} onClick={()=>{
            setSort(type)}}>
            Sort by {type}
        </button>
    );
}

export default FIlmButtonAPI;
