import React from 'react';
import Button from './Button';

const Header = ({ profits }) => {
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
            <h1>Profits: ${profits}</h1>
        </div>
    )
}

export default Header;