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
    y: 900,
    type: "good"
  },
  {
    x: 700,
    y: 100,
    type: "good"
  },
  {
    x: 700,
    y: 500,
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
    createNewPlant();
    const key = e.keyCode;
    const oldPosition = [...tractorPosition];
    // console.log(`old position ${oldPosition}`);
    switch(key) {
      // [up/down, left/right]
      case 37:
        //left
        setTractorPosition(checkIfOutOfBounds(oldPosition, [tractorPosition[0], tractorPosition[1] - 100])); // pass [0, 0] to checkIfOutOfBounds
        break;
      case 38:
        //up
       setTractorPosition(checkIfOutOfBounds(oldPosition, [tractorPosition[0] - 100, tractorPosition[1]]));
        break;
      case 39:
        //right
       setTractorPosition(checkIfOutOfBounds(oldPosition, [tractorPosition[0], tractorPosition[1] + 100]));
        break;
      case 40:
        //down
       setTractorPosition(checkIfOutOfBounds(oldPosition, [tractorPosition[0] + 100, tractorPosition[1]]));
        break;
      default:
        setTractorPosition(oldPosition); 
    }
  }

  const checkIfOutOfBounds = (oldPos, newPos) => {
    // console.log(oldPos, newPos);
    // check that x and y coordinates are not outside of field boundaries
    return (newPos[0] >=0 && newPos[0] < 800) && (newPos[1] >= 0 && newPos[1] < 1000) ? newPos : oldPos;
  }

  const checkCoordinates = (coordinates, plants) => {

    // ||
    //     (tractorPosition[0] === newPlant.x && tractorPosition[1] === newPlant.y) ||
    //     (newPlant.x > 1000 || newPlant.x < 0) ||
    //     (newPlant.y > 800 || newPlant.y < 0)
    
    plants.map((plant) => {
      return (plant.x == coordinates[0] && plant.y == coordinates[1]) ? true : false
      // if((plant.y == coordinates[0] && plant.x == coordinates[1]) ) {
      //     return true;
      //   }
    });

    return false;
  }

  const createNewPlant = () => {
  // create a random x and y coordinate array
    const x = Math.ceil( (Math.floor(Math.random() * 900)) / 100) * 100;
    const y = Math.ceil( (Math.floor(Math.random() * 700)) / 100) * 100;
    const coordinates = [x, y];
    // console.log(coordinates);
    const coordinatesFull = checkCoordinates(coordinates);
    console.log(coordinatesFull);
    console.log(coordinates);
    // generate a good or bad plant
    let type = "";
    const percentageRate = 5;
    (Math.floor(Math.random() * 10) > percentageRate) ? type="good" : type="bad";
    // console.log(type);
    const newPlant = {
      x,
      y,
      type
    }
    // console.log(newPlant);
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
      <Field tractorPosition={tractorPosition} plants={plants} />
      <Footer />
    </div>
  );
}

export default Game;
