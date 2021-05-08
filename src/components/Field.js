import React, { useState } from 'react';
import Tractor from './Tractor';

const Field = ({ tractorPosition }) => {
    const [corns, setCorns] = useState(2);
    const [weeds, setWeeds] = useState(1);

    return (
        <div 
            className="field"
            style={{
                position: 'relative',
                width: '1000px',
                height: '800px',
                background: '#fdf5d8',
                margin: '200px auto',
                border: '4px solid black',
            }}
            >
            <Tractor tractorPosition={tractorPosition} />
        </div>
    )
}

export default Field;