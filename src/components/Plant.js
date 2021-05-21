  
import React from 'react';

const Plant = ({plant}) => {
    const { x, y, type } = plant;
    const plantType = `plant ${type}`;
    return (
        <div 
            className={plantType}
            style={{
                position: 'absolute',
                top: `${y}px`,
                left: `${x}px`,
                height: '100px',
                width: '100px',
                backgroundSize: 'cover',
                zIndex: '10',
            }}
        ></div>
    )
}

export default Plant;