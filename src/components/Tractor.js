import React from 'react';
import tractorImg from './../images/icons/tractor.png';

const Tractor = ({ tractorPosition }) => {

    return (
      <div>
        <img 
          className="tractor" 
          src={tractorImg} 
          alt="a tractor"
          style={{
            position: 'absolute',
            top: `${tractorPosition[0]}`,
            left: `${tractorPosition[1]}`,
            height: '100px',
            width: '100px',
          }}
          />
      </div>
    );
  }
  
  export default Tractor;