import React, { useState } from 'react';
import Tractor from './Tractor';

const Field = ({ squares, tractorPosition }) => {

    return (
        <div 
            className="field"
            style={{
                position: 'relative',
                width: '1000px',
                height: '800px',
                background: '#fdf5d8',
                margin: '50px auto',
                border: '4px solid black',
            }}
            >
            <Tractor tractorPosition={tractorPosition} />
        </div>
    )
}

export default Field;