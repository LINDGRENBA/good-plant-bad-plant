import React, { useState } from 'react';
import Field from './components/Field';
import Header from './components/Header';
import Footer from './components/Footer';
import Countdown from 'react-countdown';

const Game = () => {
  const [grid, setGrid] = useState(Array(80).fill(null));
  const [tractorPosition, setTractorPosition] = useState([0, 0]);
  const [profits, setProfits] = useState(500);
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [gameOver, setGameOver] = useState(false);

  return (
    <div>
      <Header timeRemaining={timeRemaining} profits={profits} />
      <div 
        style={{
          textAlign: 'center', 
          paddingTop: '50px', 
          fontSize: '2rem'}}
      >
        Countdown Timer
      </div>
      <Field squares={grid} tractorPosition={tractorPosition} />
      <Footer />
    </div>
  );
}

export default Game;
