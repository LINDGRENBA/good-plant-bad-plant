import React, { useState } from 'react';
import Field from './components/Field';
import Header from './components/Header';

const Game = () => {
  const [grid, setGrid] = useState(Array(80).fill(null));
  const [tractorPosition, setTractorPosition] = useState([0, 0]);
  const [profits, setProfits] = useState(500);
  const [timeRemaining, setTimeRemaining] = useState();

  return (
    <div>
      <Header profits={profits} />
      <Field squares={grid} tractorPosition={tractorPosition} />
    </div>
  );
}

export default Game;
