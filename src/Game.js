import React, { useState } from 'react';
import Field from './components/Field';
import Header from './components/Header';

const Game = () => {
  const [tractorPosition, setTractorPosition] = useState([5, 0]);

  return (
    <div>
      <Header />
      <Field tractorPosition={tractorPosition} />
    </div>
  );
}

export default Game;
