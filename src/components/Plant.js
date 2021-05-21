  
import React from 'react';

const Plant = ({plant}) => {
    return (
        <div 
            style={{
                position: 'absolute',
                height: '100px',
                width: '100px',
                backgroundSize: 'cover',
                zIndex: '10',
            }}
        ></div>
    )
}

export default Plant;