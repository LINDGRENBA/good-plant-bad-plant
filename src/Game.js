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

  const moveTractor = () => {
    
  }

  const checkIfOutOfBounds = () => {
    
  }

  const checkCoordinates = () => {
    
  }

  const createNewPlant = () => {
    
  }

  const checkIfMowPlant = () => {
    
  }

  useEffect(() => {

  })

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
