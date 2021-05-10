import React from 'react';

const Plant = ({plant}) => {
    const {x, y, type} = plant;
    const style = `plant ${type}`;
    return (
        <div 
            className={style}
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