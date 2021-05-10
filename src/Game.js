import React, { useState, useEffect, useRef } from 'react';
import Field from './components/Field';
import Header from './components/Header';
import Footer from './components/Footer';

const Game = () => {
  const [tractorPosition, setTractorPosition] = useState([0, 0]);
  const [profits, setProfits] = useState(500);
  const [gameOver, setGameOver] = useState(false);
  const [plants, setPlants] = useState([{
    x: 100,
    y: 700,
    type: "good"
  },
  {
    x: 700,
    y: 100,
    type: "good"
  },
  {
    x: 500,
    y: 100,
    type: "bad"
  }
]);

  const startGame = () => {
    setTractorPosition([0, 0]);
    setProfits(500);
    setGameOver(false);
    // start the timer
  }

  const endGame = () => {
    setGameOver(true);
  }

  const moveTractor = (e) => {
    e.preventDefault();
    checkIfMowPlant();
    const key = e.keyCode;
    const oldPosition = [...tractorPosition];
    const [x, y] = oldPosition;
    // console.log(`old position ${oldPosition}`);
    switch(key) {
      // [up/down, left/right]
      case 37:
        //left
        console.log(key);
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

  const checkIfOutOfBounds = (oldPos, newPos) => {
    // console.log(oldPos, newPos);
    // check that x and y coordinates are not outside of field boundaries
    return (newPos[0] >=0 && newPos[0] < 1000) && (newPos[1] >= 0 && newPos[1] < 800) ? newPos : oldPos;
  }

  const checkCoordinates = (coordinates) => {
    const [x, y] = coordinates;
    let matchFound = [];
    
    let result = plants.map((plant) => {
      if (
        (plant.x == x && plant.y == y) ||
        (tractorPosition[0] == x && tractorPosition[1] == y)
        ) {
        matchFound.push(true);
      } else {
        matchFound.push(false);
      }
    });

    return matchFound.includes(true) ? true : false;
      // ||
    //     (tractorPosition[0] === newPlant.x && tractorPosition[1] === newPlant.y) ||
    //     (newPlant.x > 1000 || newPlant.x < 0) ||
    //     (newPlant.y > 800 || newPlant.y < 0)
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
      const percentageRate = 5;
      (Math.floor(Math.random() * 10) > percentageRate) ? type="good" : type="bad";
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

  const gameLoop = () => {
    // check if mow plants
    // create new plants - this should happen after check if mow
    // update the timer
    // check if timer is at zero -> if yes, endGame();
  }

  useEffect(() => {
    window.addEventListener("keydown", moveTractor);

    return () => {
      window.removeEventListener("keydown", moveTractor);
    }
  }, [tractorPosition, plants]);


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
