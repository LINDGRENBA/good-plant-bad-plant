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

  const [x, y] = tractorPosition;
  const directions = {
    37: [x - 100, y],
    38: [x, y - 100],
    39: [x + 100, y],
    40: [x, y + 100]
  }

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
        // could put unit tests on checkIfOutOfBounds and pass it different values to make sure it's returning the appropriate values
        checkIfOutOfBounds(tractorPosition)([x - 100, y]);
        break;
      case 38:
        checkIfOutOfBounds(tractorPosition)([x, y - 100]);
        break;
      case 39:
        checkIfOutOfBounds(tractorPosition)([x + 100, y]);
        break;
      case 40:
        checkIfOutOfBounds(tractorPosition)([x, y + 100]);
        break;
        //if someone presses a diff key, can have a passthrough / no-op
        // passthrough has to do with switch statement - passes through switch without doing anything
        // no-op is any function that does no operations
      default:
        // no other keys should effect tractor movement
        // setTractorPosition(tractorPosition);
    }
  }

  // double check the logic for newX and newY 
  // try to see if I can change checkIfOutOfBounds to a curried function - instead of the two functions in moveTractor, move some of the logic down to checkIfOutOfBounds
  // come to the next meeting with that done, talk about the feedback I received and what I did afterwards 
  const checkIfOutOfBounds = () => {
    //would expect checkIfOutOfBounds to return true or false and then set the tractor position, not for checkIfOutOfBounds to have the side effect of setTractorPosition.
    return (newPos) => {
      const [newX, newY] = newPos;
      setTractorPosition( (newX >= 0 && newX <= 1000 && newY >= 0 && newY <= 800) ? newPos : tractorPosition );
    }
  }

  // const checkIfOutOfBounds = (e) => {
  //     return () => {
  //       const [newX, newY] = directions[e.keyCode];
  //       console.log( ( (newX >= 0 && newX <= 1000 && newY >= 0 && newY <= 800) ? [newX, newY] : [x, y] ) );
  //     }

  // }

  const checkCoordinates = () => {
    
  }

  const createNewPlant = () => {
    
  }

  const checkIfMowPlant = () => {
    
  }

  useEffect(() => {
    window.addEventListener("keydown", moveTractor);

    // could probably remove this, but is protecting against memory leaks if necessary
    return () => {
      window.removeEventListener("keydown", moveTractor)
    }
  }, [tractorPosition]);

  // useEffect(() => {
  //   window.addEventListener("keydown", checkIfOutOfBounds(tractorPosition));

  //   return () => {
  //     window.removeEventListener("keydown", checkIfOutOfBounds(tractorPosition))
  //   }
  // }, [tractorPosition]);

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
