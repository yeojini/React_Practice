import React, { useState } from 'react';
import InputRoot from './containers/InputRoot';
import DisplayRoot from './containers/DisplayRoot';

const AppWithReduxMiddleware = ({ rootName }) => {
    const [number, setNumber] = useState('0');
    return (
        <div className='App'>
            <h1>{rootName}</h1>
            <InputRoot></InputRoot>
            <DisplayRoot></DisplayRoot>
        </div>
    );
};

export default AppWithReduxMiddleware;