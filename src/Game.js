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
      case 37:
        //left
        // console.log(key);
        // console.log([tractorPosition[0], tractorPosition[1] - 100]);
        setTractorPosition([tractorPosition[0], tractorPosition[1] - 100]);
        break;
      case 38:
        //up
        // console.log(key);
        // console.log([tractorPosition[0] - 100, tractorPosition[1]]);
        setTractorPosition([tractorPosition[0] - 100, tractorPosition[1]]);
        break;
      case 39:
        //right
        // console.log(key);
        // console.log([tractorPosition[0], tractorPosition[1] + 100]);
        setTractorPosition([tractorPosition[0], tractorPosition[1] + 100]);
        break;
      case 40:
        //down
        // console.log(key);
        // console.log([tractorPosition[0] + 100, tractorPosition[1]]);
        setTractorPosition([tractorPosition[0] + 100, tractorPosition[1]]);
        break;
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
