import React from 'react';

const Button = ({ text }) => {
    return (
      <div>
       <button
            style={{
                padding: '20px',
                fontSize: '30px'
            }}
        >
           {text}
        </button>
      </div>
    );
  }
  
  export default Button;