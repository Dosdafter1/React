import React, { useMemo } from 'react';

let render = 0;
const IsFive = ({val}) => {
    console.log(`isFive render: ${++render}`)
    const getResult = () => {
        let i = 0;
        while(i<1000000000000000000000) 
        {i++}
        return val===5?'Five':'not Five'}
    const result = useMemo(getResult,[val])
    return (
        <div>
            {result}
        </div>
    );
}

export default React.memo(IsFive,(prevProps, nextProps)=>{
    return !(nextProps.value ===5 && prevProps ===5)
});

