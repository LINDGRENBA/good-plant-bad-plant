import React from 'react';
import Tractor from './Tractor';
import Plant from './Plant';

const Field = ({ tractorPosition, plants }) => {

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
            {/* { plants.length > 0 && plants.map((plant, i) => {
                <Plant key={i} x={plant.x} y={plant.y} type={plant.type} />
            })} */}
        </div>
    )
}

export default Field;