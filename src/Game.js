import React, { useState, useEffect, useRef } from 'react';
import Field from './components/Field';
import Header from './components/Header';
import Footer from './components/Footer';

const Game = () => {
  const [tractorPosition, setTractorPosition] = useState([0, 0]);
  const [profits, setProfits] = useState(500);
  const [gameOver, setGameOver] = useState(true);
  const [counter, setCounter] = useState(200);
  const [plants, setPlants] = useState([]);
  //not using gameover ...

  const startNewGame = () => {
    setTractorPosition([0, 0]);
    setProfits(500);
    setGameOver(false);
    setCounter(200);
    setPlants([]);
    // gameLoop();
  }

  const endGame = () => {
    setGameOver(true);
  }

  const moveTractor = (e) => {
    e.preventDefault();
    createNewPlant();
    (counter <= 0) ? endGame() : setCounter(counter - 1);
    checkIfMowPlant();
    const key = e.keyCode;
    const oldPosition = [...tractorPosition];
    const [x, y] = oldPosition;
    if(counter > 0) {
      switch(key) {
        case 37:
          //left
          setTractorPosition(checkIfOutOfBounds(oldPosition, [x - 100, y]));
          break;
        case 38:
          //up
         setTractorPosition(checkIfOutOfBounds(oldPosition, [x, y-100]));
          break;
        case 39:
          //right
         setTractorPosition(checkIfOutOfBounds(oldPosition, [x + 100, y]));
          break;
        case 40:
          //down
         setTractorPosition(checkIfOutOfBounds(oldPosition, [x, y + 100]));
          break;
        default:
          setTractorPosition(oldPosition); 
      }
    }
  }

  const checkIfOutOfBounds = (oldPos, newPos) => {
    // console.log(oldPos, newPos);
    return (newPos[0] >=0 && newPos[0] < 1000) && (newPos[1] >= 0 && newPos[1] < 800) ? newPos : oldPos;
  }

  const checkCoordinates = (coordinates) => {
    const [x, y] = coordinates;
    let matchFound = [];
    
    plants.map((plant) => {
      if (
        (plant.x === x && plant.y === y) ||
        (tractorPosition[0] === x && tractorPosition[1] === y)
        ) {
        matchFound.push(true);
      } else {
        matchFound.push(false);
      }
    });

    return matchFound.includes(true) ? true : false;
  }

  const createNewPlant = () => {
  // create a random x and y coordinate array
    const x = Math.ceil( (Math.floor(Math.random() * 900)) / 100) * 100;
    const y = Math.ceil( (Math.floor(Math.random() * 700)) / 100) * 100;
    const coordinates = [x, y];
    // console.log(coordinates);
    const coordinatesFull = checkCoordinates(coordinates);
    if(!coordinatesFull) {
      let type = "";
      const goodPlantPercentageRate = 4;
      (Math.floor(Math.random() * 10) > goodPlantPercentageRate) ? type="good" : type="bad";
      // console.log(type);
      const newPlant = {
        x,
        y,
        type
      }

      setPlants([...plants, newPlant]);
    }
  }

  const checkIfMowPlant = () => {
    const currentPos = [...tractorPosition];
    let updatedPlants = [...plants]
    updatedPlants.map((plant, i) => {
      if( currentPos[0] === plant.x && currentPos[1] === plant.y){
        if(plant.type === "good") {
          setProfits(profits => profits - 100);
        }
        if(plant.type === "bad") {
          setProfits(profits => profits + 50);
        }
        updatedPlants = plants.filter(plant => plant !== plants[i]);
        setPlants([...updatedPlants]);
      }
    })
  }

  // const gameLoop = () => {
  //   const counterCopy = counter;
  //   setCounter(counterCopy - 1);
  //   if(counterCopy <= 0){
  //     console.log("game over");
  //     endGame();
  //   } else {
  //     if(counterCopy % 5 === 0 && !gameOver) {
  //       console.log("new plant");
  //       createNewPlant();
  //     }
  //     requestAnimationFrame(gameLoop);
  //   }
  // }

  useEffect(() => {
    window.addEventListener("keydown", moveTractor);
    // checkIfMowPlant();

    return () => {
      window.removeEventListener("keydown", moveTractor);
    }
  }, [tractorPosition]);

  // window.requestAnimationFrame(gameLoop);


  return (
    <div>
      <Header profits={profits} startNewGame={startNewGame} counter={counter} />
      <div 
        style={{
          textAlign: 'center', 
          paddingTop: '50px', 
          fontSize: '2rem'}}
      >
        {/* Countdown Timer */}
        Moves remaining: {counter}
      </div>
      <Field tractorPosition={tractorPosition} plants={plants} />
      <Footer />
    </div>
  );
}

export default Game;
