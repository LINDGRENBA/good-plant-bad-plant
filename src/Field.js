import React from 'react';
import Farmer from './components/Farmer';
import GoodPlant from './components/GoodPlant';
import Weeds from './components/Weeds';
import Button from './components/Button';

const Field = () => {
  return (
    <div>
     <Farmer />
     <GoodPlant />
     <Weeds />
     <Button />
    </div>
  );
}

export default Field;
