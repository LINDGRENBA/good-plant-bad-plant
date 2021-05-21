import React from 'react';
import Tractor from './Tractor';
import Plant from './Plant';

const Field = ({ plants, tractorPosition }) => {

    return (
        <div 
            className="field"
            style={{
                position: 'relative',
                width: '1000px',
                height: '800px',
                background: '#fdf5d8',
                margin: '10px auto',
                border: '4px solid black',
                zIndex: '-1',
            }}
            >
            <Tractor tractorPosition={tractorPosition} />
        </div>
    )
}

export default Field;