import React from 'react';
import Tractor from './Tractor';
import GoodPlant from './Corn';
import Weeds from './Weeds';

const Field = () => {
    return (
        <div className="field">
            <Tractor />
            <GoodPlant />
            <Weeds />
        </div>
    )
}

export default Field;