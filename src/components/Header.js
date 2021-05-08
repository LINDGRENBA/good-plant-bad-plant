import React from 'react';
import Button from './Button';

const Header = () => {
    return (
        <div
            style={{
                width: '100vw',
                padding: '20px',
                background: '#4c9f70',
                color: '#fff',
                fontSize: '20px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}
        >
            <Button text="Start Game"/>
            <h2>Mow down the grass to increase your points. Avoid the corn or you'll lose points.</h2>
            <p>POINTS HERE</p>
        </div>
    )
}

export default Header;