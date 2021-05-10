import React from 'react';

const Header = ({ profits, startNewGame, counter }) => {
    return (
        <div
            style={{
                width: '100vw',
                padding: '10px',
                background: '#4c9f70',
                color: '#fff',
                textAlign: 'center',
            }}
        >
            <h1>Good Plant, Bad Plant</h1>
            <div
                style={{
                    // display: 'flex',
                    // flexDirection: 'row',
                    // justifyContent: 'space-evenly',
                    // alignItems: 'center'
                }}
            >
                <h2>Mow as much grass as you can to increase your profits before you run out of turns.</h2>
                <h2>Avoid the corn or your profits will take a hit!</h2>
                <h2>Plants will grow as you move the tractor. Use the arrows on your keyboard.</h2>
                <h1>Profits: ${profits}</h1>
                { (counter <= 0) && <button onClick={startNewGame} style={{ padding: '20px', fontSize: '30px' }}>Start New Game</button>}
            </div>
        </div>
    )
}

export default Header;