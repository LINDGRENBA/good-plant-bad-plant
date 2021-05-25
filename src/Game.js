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

  const [currentX, currentY] = tractorPosition;
  const directions = {
    37: [currentX - 100, currentY], //LEFT
    38: [currentX, currentY - 100], //UP
    39: [currentX + 100, currentY], //RIGHT
    40: [currentX, currentY + 100], //DOWN
  }

  const startNewGame = () => {
    setGameOver(false);
    createNewPlant();
  }

  const isGameOver = () => {
    (moves <= 0) && setGameOver(true);
  }

  const moveTractor = e => {
    e.preventDefault();
    const key = e.keyCode;
    if(key === 37 || key === 38 || key === 39 || key === 40) {
      if(!gameOver) {
        let direction = directions[e.keyCode];
        let newTractorPosition = checkBoundaries(direction)(tractorPosition);
          setTractorPosition(newTractorPosition);
          checkIfMowedPlant();
          setMoves(moves - 1);
        }
    }
  }  

  const checkBoundaries = (newPosition) => {
      return previousPosition => {
        const [x, y] = newPosition;
        return (x >= 0 && x <= 900 && y >= 0 && y <= 700) ? newPosition : previousPosition;
      }
  }

  const isSpaceOccupied = (coordinates) => {
    const [plantX, plantY] = coordinates;
    const [tractorX, tractorY] = tractorPosition;
    const occupiedByPlant = [];
    plants.forEach(plant => {
      (plantX === plant.x && plantY === plant.y) && occupiedByPlant.push(plant);
    })

    if(plantX === tractorX && plantY === tractorY) {
      return true;
    } else if(occupiedByPlant.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  const createNewPlant = () => {
    const plantsCopy = [...plants];
    const x = Math.ceil( (Math.floor(Math.random() * 900)) / 100) * 100;
    const y = Math.ceil( (Math.floor(Math.random() * 700)) / 100) * 100;
    const coordinates = [x, y];
    const coordinatesOccupied = isSpaceOccupied(coordinates);

    if(!coordinatesOccupied) {
      const goodPlantPercentage = 4;
      const type = (Math.floor(Math.random() * 10) > goodPlantPercentage) ? "good" : "bad";
      const newPlant = {
        x,
        y,
        type,
      };
      setPlants([...plantsCopy, newPlant]);
    }
  }

  const checkIfMowedPlant = () => {
    const currentPos = [...tractorPosition];
    const [currentX, currentY] = currentPos;
    let plantsCopy = [...plants];
    plants.forEach((plant, i) => {
      if(currentX === plant.x && currentY === plant.y) {
        setPlants(plantsCopy.filter(plant => plant !== plants[i]));
      }
    });
  }

  useEffect(() => { 
    window.addEventListener("keydown", moveTractor);
    isGameOver();
    // not needed for single page app, but left in case to avoid memory leak
    return () => {
      window.removeEventListener("keydown", moveTractor);
      isGameOver();
    }
  }, [tractorPosition, moves, gameOver]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(!gameOver && plants.length <= 79) {
          createNewPlant();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [plants, gameOver]);

  return (
    <div style={{width: '100vw'}}>
      <Header 
        timeRemaining={timeRemaining} 
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
