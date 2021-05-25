import React from 'react';

const Header = ({ highScore, profits, startNewGame, moves }) => {
    return (
        <div
            style={{
                position: 'relative',
                width: '100vw',
                padding: '10px',
                background: '#4c9f70',
                color: '#fff',
                textAlign: 'center',
            }}
        >

            <div
                style={{
                        position: 'absolute',
                        top: '10px',
                        left: '20px',
                        textAlign: 'left',
                        fontSize: '1.5rem',
                    }}
            >
                <h2>
                    High Score: {highScore}
                </h2>

                <button 
                    style={{
                        padding: '5px 7px', 
                        fontSize: '1.5rem'
                    }} 
                    onClick={startNewGame}
                    >
                    Start Game
                </button>
            </div>

            <h1>Good Plant, Bad Plant</h1>
            <div>
            <h2>Mow as much grass as you can to increase your profits before you run out of turns.</h2>
                <h2>Avoid the corn or your profits will take a hit!</h2>
                <h2>Plants will grow as you move the tractor. Use the arrows on your keyboard.</h2>
                <h1>Profits: ${profits}</h1>
                { (moves <= 0) && <button onClick={startNewGame} style={{ padding: '20px', fontSize: '30px' }}>Start New Game</button>}
            </div>
        </div>
    )
}

export default Header;