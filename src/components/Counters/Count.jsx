import React from 'react';

const render = {
    count1: 0,
    count2: 0,
}
const Count = ({val, id}) => {
    console.log(`Count ${id} render:${++render[`count${id}`]}`)
    return (
        <div>
            <strong>{val}</strong>
        </div>
    );
}

export default Count;
