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
            left: `${tractorPosition[0]}px`,
            top: `${tractorPosition[1]}px`,
            height: '100px',
            width: '100px',
            zIndex: '20',
          }}
          />
      </div>
    );
  }
  
  export default Tractor;