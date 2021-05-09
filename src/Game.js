import React, { useState } from 'react';
import Field from './components/Field';
import Header from './components/Header';
import Footer from './components/Footer';

const Game = () => {
  const [grid, setGrid] = useState(Array(80).fill(null));
  const [tractorPosition, setTractorPosition] = useState([0, 0]);
  const [profits, setProfits] = useState(500);
  const [timeRemaining, setTimeRemaining] = useState();
  const [gameOver, setGameOver] = useState(false);

  return (
    <div>
      <Header profits={profits} />
      <Field squares={grid} tractorPosition={tractorPosition} />
      <Footer />
    </div>
  );
}

export default Game;
