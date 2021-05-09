import React from 'react';

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
            <button style={{ padding: '20px', fontSize: '30px' }}>Start Game</button>
            <h2>Mow the grass to increase profit. If you mow the corn, profits will go down!</h2>
            <h1>Profits: ${profits}</h1>
        </div>
    )
}

export default Header;