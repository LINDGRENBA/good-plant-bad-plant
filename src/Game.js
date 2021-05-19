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

  const moveTractor = (e) => {
    e.preventDefault();
    console.log(e.keyCode);
    const [x, y] = tractorPosition;
    // 37 left, 38 up, 39 right, 40 down
    switch(e.keyCode){
      case 37:
        setTractorPosition(checkIfOutOfBounds(tractorPosition, [x - 100, y]));
        break;
      case 38:
        setTractorPosition(checkIfOutOfBounds(tractorPosition, [x, y - 100]));
        break;
      case 39:
        setTractorPosition(checkIfOutOfBounds(tractorPosition, [x + 100, y]));
        break;
      case 40:
        setTractorPosition(checkIfOutOfBounds(tractorPosition, [x, y + 100]));
        break;
      default:
        setTractorPosition(tractorPosition);
    }
  }

  const checkIfOutOfBounds = (initPos, newPos) => {
    const [newX, newY] = newPos;

    // double check the logic for newX and newY 
    // try to see if I can change checkIfOutOfBounds to a curried function - instead of the two functions in moveTractor, move some of the logic down to checkIfOutOfBounds
    // come to the next meeting with that done, talk about the feedback I received and what I did afterwards 

    return (newX >= 0 && newX <= 1000 && newY >= 0 && newY <= 800) ? newPos : initPos;
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
