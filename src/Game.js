import React, { useState, useEffect, useRef } from 'react';
import Field from './components/Field';
import Header from './components/Header';
import Footer from './components/Footer';

const Game = () => {
  const [tractorPosition, setTractorPosition] = useState([0, 0]);
  const [profits, setProfits] = useState(500);
  const [gameOver, setGameOver] = useState(false);
  const [plants, setPlants] = useState([{
    x: 500,
    y: 200,
    type: "good"
  }]);

  const startGame = () => {
    setTractorPosition([0, 0]);
    setProfits(500);
    setGameOver(false);
  }

  const endGame = () => {
    setGameOver(true);
  }

  const moveTractor = (e) => {
    e.preventDefault();
    const key = e.keyCode;
    const oldPosition = [...tractorPosition];
    // console.log(`old position ${oldPosition}`);
    switch(key) {
      // [up/down, left/right]
      case 37:
        //left
        setTractorPosition(checkIfCollide(oldPosition, [tractorPosition[0], tractorPosition[1] - 100])); // pass [0, 0] to checkIfCollide
        break;
      case 38:
        //up
       setTractorPosition(checkIfCollide(oldPosition, [tractorPosition[0] - 100, tractorPosition[1]]));
        break;
      case 39:
        //right
       setTractorPosition(checkIfCollide(oldPosition, [tractorPosition[0], tractorPosition[1] + 100]));
        break;
      case 40:
        //down
       setTractorPosition(checkIfCollide(oldPosition, [tractorPosition[0] + 100, tractorPosition[1]]));
        break;
      default:
        setTractorPosition(oldPosition); 
    }
  }

  const checkIfCollide = (oldPos, newPos) => {
    // console.log(oldPos, newPos);
    // check that x and y coordinates are not outside of field boundaries
    return (newPos[0] >=0 && newPos[0] < 800) && (newPos[1] >= 0 && newPos[1] < 1000) ? newPos : oldPos;
  }

  const createNewPlant = () => {
    const min = 0;
    const maxHt = 800;
    const maxWt = 1000;
    const x = Math.floor(Math.random() * (min - maxWt) + min);
    const y = Math.floor(Math.random() * (min - maxHt) + min);

  }

  const checkIfMowPlant = () => {

  }

  const gameLoop = () => {

  }

  useEffect(() => {
    window.addEventListener("keydown", moveTractor);

    return () => {
      window.removeEventListener("keydown", moveTractor);
    }
  }, [tractorPosition]);


  return (
    <div>
      <Header profits={profits} />
      <div 
        style={{
          textAlign: 'center', 
          paddingTop: '50px', 
          fontSize: '2rem'}}
      >
        Countdown Timer
      </div>
      <Field tractorPosition={tractorPosition} plants={plants} />
      <Footer />
    </div>
  );
}

export default Game;
