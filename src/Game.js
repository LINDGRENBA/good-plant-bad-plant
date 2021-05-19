import React, { useState, useEffect } from 'react';
import Field from './components/Field';
import Header from './components/Header';
import Footer from './components/Footer';

const Game = () => {
  const [tractorPosition, setTractorPosition] = useState([0, 0]);
  const [profits, setProfits] = useState(500);
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [gameOver, setGameOver] = useState(true);
  const [moves, setMoves] = useState(100);
  const [plants, setPlants] = useState([]);
  const [highScore, setHighScore] = useState(0);

  const startNewGame = () => {

  }

  const endGame = () => {
    
  }

  const moveTractor = e => {
    e.preventDefault();
    const [x, y] = tractorPosition;
    let newTractorPosition; // undefined-falsy
    switch(e.keyCode) {
      case 37: // LEFT
        newTractorPosition = [x - 100, y];
        break;
      case 38: // UP
        newTractorPosition = [x, y - 100];
        break;
      case 39: // RIGHT
        newTractorPosition = [x + 100, y];
        break;
      case 40: // DOWN
        newTractorPosition = [x, y + 100];
        break;
      default:
        // no other keys should effect tractor movement
    }

    if (newTractorPosition && isInBounds(newTractorPosition)) {
      setTractorPosition(newTractorPosition);
    }
  }  

  const isInBounds = (newPos) => {
    const [x, y] = newPos;
    return (x >= 0 && x <= 1000 && y >= 0 && y <= 800) ? true : false;
  }

  const checkCoordinates = () => {
    
  }

  const createNewPlant = () => {
    
  }

  const checkIfMowPlant = () => {
    
  }

  useEffect(() => { 
    window.addEventListener("keydown", moveTractor);

    return () => {
      window.removeEventListener("keydown", moveTractor)
    }
  }, [tractorPosition]);

  return (
    <div>
      <Header 
        imeRemaining={timeRemaining} 
        profits={profits}
        startNewGame={startNewGame}
        moves={moves}
      />
      <div 
        style={{
          textAlign: 'center', 
          paddingTop: '10px', 
          fontSize: '2rem'}}
      >
        Moves remaining: {moves}
      </div>
      <Field plants={plants} tractorPosition={tractorPosition} />
      <Footer />
    </div>
  );
}

export default Game;
