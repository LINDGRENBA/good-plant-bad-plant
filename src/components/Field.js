import React, { useState } from 'react';
import Tractor from './Tractor';
// import Plot from './Plot';

const Field = ({ squares, tractorPosition }) => {

    return (
        <div 
            className="field"
            style={{
                position: 'relative',
                width: '1000px',
                height: '800px',
                background: '#fdf5d8',
                margin: '100px auto',
                border: '4px solid black',
                // display: 'grid',
                // gridTemplate: 'repeat(8, 1fr) / repeat(10, 1fr)',
            }}
            >
            {/* {squares.map((square, i) => (
                <Plot key={i} value={square} />
            ))} */}
            <Tractor tractorPosition={tractorPosition} />
        </div>
    )
}

export default Field;