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

  const [currentX, currentY] = tractorPosition;
  const directions = {
    37: [currentX - 100, currentY], //LEFT
    38: [currentX, currentY - 100], //UP
    39: [currentX + 100, currentY], //RIGHT
    40: [currentX, currentY + 100], //DOWN
  }

  const startNewGame = () => {

  }

  const endGame = () => {
    
  }

  const moveTractor = e => {
    e.preventDefault();
    const key = e.keyCode;
    if(key === 37 || key === 38 || key === 39 || key === 40) {
      let direction = directions[e.keyCode];
      let newTractorPosition = checkBoundaries(direction)(tractorPosition);
      setTractorPosition(newTractorPosition);
    }
  }  

  const checkBoundaries = (newPosition) => {
      return previousPosition => {
        const [x, y] = newPosition;
        return (x >= 0 && x <= 900 && y >= 0 && y <= 700) ? newPosition : previousPosition;
      }
  }

  const checkCoordinates = () => {
    
  }

  const createNewPlant = () => {
    
  }

  const checkIfMowPlant = () => {
    
  }

  useEffect(() => { 
    window.addEventListener("keydown", moveTractor);

    // not needed for single page app, but left in case to avoid memory leak
    return () => {
      window.removeEventListener("keydown", moveTractor)
    }
  }, [tractorPosition]);

  return (
    <div style={{width: '100vw'}}>
      <Header 
        timeRemaining={timeRemaining} 
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
