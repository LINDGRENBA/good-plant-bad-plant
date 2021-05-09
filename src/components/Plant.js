import React from 'react';

const Plant = ({x, y, type}) => {
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
        >PLANT {type}</div>
    )
}

export default Plant;