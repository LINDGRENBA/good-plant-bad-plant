import React from 'react';

const Plant = ({plant}) => {
    const {x, y, type} = plant;
    const style = `plant ${type}`;
    return (
        <div 
            className={style}
            style={{
                position: 'absolute',
                top: `${x}px`,
                left: `${y}px`,
                height: '100px',
                width: '100px',
            }}
        ></div>
    )
}

export default Plant;