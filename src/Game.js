import React, { useState, useEffect, useRef } from 'react';
import Field from './components/Field';
import Header from './components/Header';
import Footer from './components/Footer';

const Game = () => {
  const [tractorPosition, setTractorPosition] = useState([0, 0]);
  const [profits, setProfits] = useState(500);
  const [gameOver, setGameOver] = useState(false);

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
    switch(key) {
      // [up/down, left/right]
      //left
      case 37:
        console.log(key);
        console.log([tractorPosition[0], tractorPosition[1] - 100]);
        setTractorPosition([tractorPosition[0], tractorPosition[1] - 100]); // [100, 0]
      case 38:
        // setTractorPosition(tractorPosition);
      case 39:
        // setTractorPosition(tractorPosition);
      case 40:
        // setTractorPosition(tractorPosition);
      default:
        // setTractorPosition(tractorPosition); 
    }
  }

  const checkIfCollide = () => {

  }

  const mowPlant = () => {

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
      <Field tractorPosition={tractorPosition} />
      <Footer />
    </div>
  );
}

export default Game;
